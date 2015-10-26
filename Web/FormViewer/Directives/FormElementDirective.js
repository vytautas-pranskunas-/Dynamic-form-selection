var FormElementDirective = (function () {
    function FormElementDirective($sce) {
        var _this = this;
        this.$sce = $sce;
        this.restrict = 'E';
        this.templateUrl = 'Web/FormViewer/Directives/form-element.html';
        this.scope = {
            form: '=',
            item: '=',
            submitAttempted: '='
        };
        this.link = function ($scope) {
            $scope.getInputElement = _this.getInputElement;
            $scope.getValidations = _this.getValidations;
            $scope.isRequired = _this.isRequired;
        };
        this.getInputElement = function (item) {
            var inputAttributes = [];
            if (item.type != 2 /* checkBox */) {
                inputAttributes.push('class="form-control"');
            }
            inputAttributes.push('ng-model="item.value"');
            inputAttributes.push('name="' + item.name + '"');
            inputAttributes.push('placeholder="' + item.label + '"');
            inputAttributes.push(_this.getInputValidations(item));
            var htmlElement = _this.getInputElementByType(item);
            htmlElement = htmlElement.replace('{0}', inputAttributes.join(" "));
            return _this.$sce.trustAsHtml(htmlElement);
        };
        this.getValidations = function (item) {
            var rules = _.map(item.validationRules, function (validationRule) {
                return {
                    ruleName: _this.rulesToString(validationRule.type, false),
                    message: _this.getRuleMessage(validationRule.type, validationRule.value, item.label)
                };
            });
            var templates = _.map(rules, function (rule) { return _this.getValidationTemplate(item, rule); });
            return _this.$sce.trustAsHtml(templates.join(""));
        };
        this.getValidationTemplate = function (item, rule) {
            return '<span ng-show="(form[\'' + item.name + '\'].$dirty || submitAttempted) && form[\'' + item.name + '\'].$error.' + rule.ruleName + '" class="error-message">' + rule.message + '</span>';
        };
        this.getInputValidations = function (item) {
            var rules = _.map(item.validationRules, function (rule) { return _this.formatValidationAttribute(_this.rulesToString(rule.type), rule.value); });
            return rules.join(" ");
        };
        this.getFieldType = function (item) {
            return _.any(item.validationRules, function (rule) { return rule.type == 4 /* email */; }) ? 'email' : 'text';
        };
    }
    FormElementDirective.prototype.getInputElementByType = function (item) {
        switch (item.type) {
            case 2 /* checkBox */:
                return '<div class="control-label pull-left"><input type="checkbox" {0}></div>';
            case 3 /* dropDown */:
                return '<select ng-options="obj.value as obj.text for obj in item.initialData" {0}></select>';
            default:
                return '<input type="' + this.getFieldType(item) + '" {0} />';
        }
    };
    FormElementDirective.prototype.isRequired = function (item) {
        return _.any(item.validationRules, function (rule) { return rule.type == 1 /* required */; });
    };
    FormElementDirective.prototype.rulesToString = function (validationType, addNg) {
        if (addNg === void 0) { addNg = true; }
        switch (validationType) {
            case 1 /* required */:
                return 'required';
            case 2 /* maxLength */:
                return addNg ? 'ng-maxlength' : 'maxlength';
            case 3 /* minLength */:
                return addNg ? 'ng-minlength' : 'minlength';
            case 4 /* email */:
                return 'email';
            default:
                return '';
        }
    };
    FormElementDirective.prototype.getRuleMessage = function (validationType, value, filedName) {
        switch (validationType) {
            case 1 /* required */:
                return filedName + '  is required.';
            case 2 /* maxLength */:
                return filedName + ' max length is ' + value + '.';
            case 3 /* minLength */:
                return filedName + ' min length is ' + value + '.';
            case 4 /* email */:
                return 'Email is incorrect';
            default:
                return '';
        }
    };
    FormElementDirective.prototype.formatValidationAttribute = function (name, value) {
        if (name === '') {
            return '';
        }
        return name + '="' + (value != undefined ? value : '') + '"';
    };
    FormElementDirective.directiveId = 'formElement';
    return FormElementDirective;
})();
//# sourceMappingURL=FormElementDirective.js.map