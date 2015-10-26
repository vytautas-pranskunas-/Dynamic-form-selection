interface ISubmitAttemptDirective extends ng.IScope {
    submitAttempted: boolean;
}

class SubmitAttemptDirective {
    static directiveId: string = "submitAttempt";

    restrict: string = 'A';
    
    controller: any = ($scope) => { $scope.submitAttempted = false; };
    compile: any = () => {
        return {
            post: ($scope: ISubmitAttemptDirective, formElement) => {
            formElement.bind('submit', () => {
                $scope.submitAttempted = true;
                if (!$scope.$$phase) {
                    $scope.$digest();
                }
            });
        }}
    }
}