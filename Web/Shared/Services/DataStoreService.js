var DataStoreService = (function () {
    function DataStoreService() {
        this.data = null;
    }
    DataStoreService.prototype.put = function (data) {
        this.data = data;
    };
    DataStoreService.prototype.get = function () {
        return this.data;
    };
    DataStoreService.prototype.remove = function () {
        this.data = null;
    };
    DataStoreService.serviceId = "dataStore";
    return DataStoreService;
})();
//# sourceMappingURL=DataStoreService.js.map