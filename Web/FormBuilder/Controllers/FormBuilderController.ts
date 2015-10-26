interface IFormBuilderModel {
    personDetailsFields: IFormElement[];
    addressDetailsFields: IFormElement[];
}

class FormBuilderController {
    static controllerId = 'FormBuilderController';

    model: IFormBuilderModel;
    searchText: string = '';

    constructor(formBuilder: IFormBuilderService, private dataStore: IDataStoreService, private $state: ng.ui.IStateService) {
        this.model = <IFormBuilderModel>{
            personDetailsFields: formBuilder.getInitialPersonDetailsFields(),
            addressDetailsFields: formBuilder.getInitialAddressDetailsFields()
        };
    }

    save() {
        this.dataStore.put(<IFormBuilderModel>{
            personDetailsFields: _.filter(angular.copy(this.model.personDetailsFields), (item: IFormElement) => item.isSelected),
            addressDetailsFields: _.filter(angular.copy(this.model.addressDetailsFields), (item: IFormElement) => item.isSelected)
        });

        this.$state.go('app.formViewer');
    }
}