var SubmitAttemptDirective = (function () {
    function SubmitAttemptDirective() {
        this.restrict = 'A';
        this.controller = function ($scope) {
            $scope.submitAttempted = false;
        };
        this.compile = function () {
            return {
                post: function ($scope, formElement) {
                    formElement.bind('submit', function () {
                        $scope.submitAttempted = true;
                        if (!$scope.$$phase) {
                            $scope.$digest();
                        }
                    });
                }
            };
        };
    }
    SubmitAttemptDirective.directiveId = "submitAttempt";
    return SubmitAttemptDirective;
})();
//# sourceMappingURL=SubmitAttemptDirective.js.map