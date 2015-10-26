var HeaderController = (function () {
    function HeaderController($rootScope, $state, $location) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.$location = $location;
        this.init = function () {
            _this.menu = [
                { name: 'Build', sref: 'app.formBuilder', roots: ['/form-builder'] },
                { name: 'View', sref: 'app.formViewer', roots: ['/form-viewer'] }
            ];
            _this.selectedMenuItem = _this.menu[0];
            _this.$rootScope.$on('$stateChangeSuccess', function (event, toState) {
                _this.selectMenuItem(toState);
            });
            _this.selectMenuItem(_this.$state.current);
        };
        this.isActive = function (item) {
            var path = _this.$location.path().toLowerCase() || '/home', roots = item.roots || [], matchesPath = function (element) { return (path.indexOf(element) > -1); };
            return roots.some(matchesPath);
        };
        this.selectMenuItem = function (state) {
            var splitedPath = state.name.split('.'), parentName = splitedPath[0] + '.' + splitedPath[1], menuItemFilter = function (element) { return (element.sref.indexOf(parentName) > -1); };
            var selectedItem = _this.menu.filter(menuItemFilter);
            _this.selectedMenuItem = selectedItem[0];
        };
        this.init();
    }
    HeaderController.controllerId = 'HeaderController';
    return HeaderController;
})();
//# sourceMappingURL=HeaderController.js.map