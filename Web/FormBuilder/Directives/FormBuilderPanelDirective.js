var FormBuilderPanelDirective = (function () {
    function FormBuilderPanelDirective($sce) {
        var _this = this;
        this.$sce = $sce;
        this.restrict = 'E';
        this.templateUrl = 'Web/FormBuilder/Directives/form-builder-panel.html';
        this.scope = {
            title: '@',
            searchText: '=',
            listItems: '='
        };
        this.link = function ($scope) {
            $scope.highlightText = function (text, search) {
                if (!search) {
                    return _this.$sce.trustAsHtml(text);
                }
                return _this.$sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>'));
            };
            $scope.filterText = function (item) {
                return !$scope.searchText || item.label.search(new RegExp($scope.searchText, 'gi')) >= 0;
            };
            $scope.checkAll = function () {
                if ($scope.selectedAll) {
                    $scope.selectedAll = true;
                }
                else {
                    $scope.selectedAll = false;
                }
                angular.forEach($scope.listItems, function (item) {
                    item.isSelected = $scope.selectedAll;
                });
            };
        };
    }
    FormBuilderPanelDirective.directiveId = 'formBuilderPanel';
    return FormBuilderPanelDirective;
})();
//# sourceMappingURL=FormBuilderPanelDirective.js.map