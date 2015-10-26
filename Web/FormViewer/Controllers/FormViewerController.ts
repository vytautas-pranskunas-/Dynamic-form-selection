class FormViewerController {
    static controllerId = 'FormViewerController';

    model: IFormBuilderModel;

    constructor(dataStore: IDataStoreService) {
        this.model = dataStore.get();
    }

    save() {
        var t = this.model;
    }
}