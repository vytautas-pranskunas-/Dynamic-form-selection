var CompileDirective = (function () {
    function CompileDirective($timeout, $compile) {
        var _this = this;
        this.$timeout = $timeout;
        this.$compile = $compile;
        this.restrict = 'A';
        this.link = function ($scope, element, attrs) {
            _this.$timeout(function () {
                _this.$compile(element.contents())($scope);
            });
        };
    }
    CompileDirective.directiveId = "compile";
    return CompileDirective;
})();
//# sourceMappingURL=CompileDirective.js.map