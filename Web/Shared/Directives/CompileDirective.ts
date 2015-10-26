class CompileDirective {
    static directiveId: string = "compile";

    constructor(private $timeout: ng.ITimeoutService, private $compile: ng.ICompileService) { }

    restrict: string = 'A';
    
    link: any = ($scope, element, attrs) => {
        this.$timeout(() => {
            this.$compile(element.contents())($scope);
        });
    };
}