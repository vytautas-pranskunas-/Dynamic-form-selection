class FormBuilderPanelDirective {
    static directiveId = 'formBuilderPanel';

    constructor(private $sce: ng.ISCEService) {}

    restrict = 'E';
    templateUrl = 'Web/FormBuilder/Directives/form-builder-panel.html'
    scope: any = {
        title: '@',
        searchText: '=',
        listItems: '='
    }


    link: any = ($scope) => {
        $scope.highlightText = (text: string, search: string) => {
            if (!search) {
                return this.$sce.trustAsHtml(text);
            }

            return this.$sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>'));
        }

        $scope.filterText = (item: IFormElement) => {
            return !$scope.searchText || item.label.search(new RegExp($scope.searchText, 'gi')) >= 0;
        }

        $scope.checkAll = () => {
            if ($scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.listItems, item => {
                item.isSelected = $scope.selectedAll;
            });

        };
    }
}