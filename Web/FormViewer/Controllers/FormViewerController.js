var FormViewerController = (function () {
    function FormViewerController(dataStore) {
        this.model = dataStore.get();
    }
    FormViewerController.prototype.save = function () {
        var t = this.model;
    };
    FormViewerController.controllerId = 'FormViewerController';
    return FormViewerController;
})();
//# sourceMappingURL=FormViewerController.js.map