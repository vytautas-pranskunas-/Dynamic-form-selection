class FormElementDirective {
    static directiveId = 'formElement';

    constructor(private $sce: ng.ISCEService) { }

    restrict = 'E';
    templateUrl = 'Web/FormViewer/Directives/form-element.html'
    scope: any = {
        form: '=',
        item: '=',
        submitAttempted: '='
    }


    link: any = ($scope) => {
        $scope.getInputElement = this.getInputElement;
        $scope.getValidations = this.getValidations;
        $scope.isRequired = this.isRequired;
    };

    getInputElement = (item: IFormElement) => {
        var inputAttributes = [];

        if (item.type != ElemntType.checkBox) {
            inputAttributes.push('class="form-control"');
        }

        inputAttributes.push('ng-model="item.value"');
        inputAttributes.push('name="' + item.name + '"');
        inputAttributes.push('placeholder="' + item.label + '"');
        inputAttributes.push(this.getInputValidations(item));

        var htmlElement = this.getInputElementByType(item);
        htmlElement = htmlElement.replace('{0}', inputAttributes.join(" "));

        return this.$sce.trustAsHtml(htmlElement);
    }

    getValidations = (item) => {
        var rules = _.map(item.validationRules, (validationRule: IFormElementValidation) => {
            return {
                ruleName: this.rulesToString(validationRule.type, false),
                message: this.getRuleMessage(validationRule.type, validationRule.value, item.label)
            }
        });
        var templates = _.map(rules, (rule: any) => this.getValidationTemplate(item, rule));

        return this.$sce.trustAsHtml(templates.join(""));
    }

    getValidationTemplate = (item: IFormElement, rule: any) => {
        return '<span ng-show="(form[\'' + item.name + '\'].$dirty || submitAttempted) && form[\'' + item.name + '\'].$error.' + rule.ruleName + '" class="error-message">' + rule.message +'</span>';
    }

    getInputElementByType(item: IFormElement) {
        switch (item.type) {
            case ElemntType.checkBox:
                return '<div class="control-label pull-left"><input type="checkbox" {0}></div>';
            case ElemntType.dropDown:
                return '<select ng-options="obj.value as obj.text for obj in item.initialData" {0}></select>';
            default:
                return '<input type="' + this.getFieldType(item) + '" {0} />';
        }
    }

    getInputValidations = (item: IFormElement) => {
        var rules = _.map(item.validationRules, (rule: IFormElementValidation) => this.formatValidationAttribute(this.rulesToString(rule.type), rule.value));
        return rules.join(" ");
    }
    
    isRequired(item: IFormElement) {
        return _.any(item.validationRules, (rule: IFormElementValidation) => rule.type == FormElementValidation.required);
    }

    private getFieldType = (item: IFormElement) => {
        return _.any(item.validationRules, (rule: IFormElementValidation) => rule.type == FormElementValidation.email)
            ? 'email'
            : 'text';
    }

    private rulesToString(validationType: FormElementValidation, addNg: boolean = true) {
        switch (validationType) {
            case FormElementValidation.required:
                return 'required';
            case FormElementValidation.maxLength:
                return addNg ? 'ng-maxlength' : 'maxlength';
            case FormElementValidation.minLength:
                return addNg ? 'ng-minlength' : 'minlength';
            case FormElementValidation.email:
                return 'email';
            default:
                return '';
        }
    }

    private getRuleMessage(validationType: FormElementValidation, value: any, filedName: string) {
        switch (validationType) {
            case FormElementValidation.required:
                return filedName + '  is required.';
            case FormElementValidation.maxLength:
                return filedName + ' max length is ' + value + '.';
            case FormElementValidation.minLength:
                return filedName + ' min length is ' + value + '.';
            case FormElementValidation.email:
                return 'Email is incorrect';
            default:
                return '';
        }
    }

    private formatValidationAttribute(name: string, value: any) {
        if (name === '') {
            return '';
        }

        return name + '="' + (value != undefined ? value : '') + '"';
    }
}