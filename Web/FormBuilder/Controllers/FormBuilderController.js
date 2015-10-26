var FormBuilderController = (function () {
    function FormBuilderController(formBuilder, dataStore, $state) {
        this.dataStore = dataStore;
        this.$state = $state;
        this.searchText = '';
        this.model = {
            personDetailsFields: formBuilder.getInitialPersonDetailsFields(),
            addressDetailsFields: formBuilder.getInitialAddressDetailsFields()
        };
    }
    FormBuilderController.prototype.save = function () {
        this.dataStore.put({
            personDetailsFields: _.filter(angular.copy(this.model.personDetailsFields), function (item) { return item.isSelected; }),
            addressDetailsFields: _.filter(angular.copy(this.model.addressDetailsFields), function (item) { return item.isSelected; })
        });
        this.$state.go('app.formViewer');
    };
    FormBuilderController.controllerId = 'FormBuilderController';
    return FormBuilderController;
})();
//# sourceMappingURL=FormBuilderController.js.map