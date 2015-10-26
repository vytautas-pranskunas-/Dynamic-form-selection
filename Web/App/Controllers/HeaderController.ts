class HeaderController {
    static controllerId = 'HeaderController';
    
    userFullName: string;
    selectedMenuItem: any;

    menu: any[];

    constructor(
        private $rootScope: ng.IScope,
        private $state: ng.ui.IStateService,
        private $location
    ) {
        this.init();
    }

    private init = () => {

        this.menu = [
            { name: 'Build', sref: 'app.formBuilder', roots: ['/form-builder'] },
            { name: 'View', sref: 'app.formViewer', roots: ['/form-viewer'] }
        ];

        this.selectedMenuItem = this.menu[0];
       
        this.$rootScope.$on('$stateChangeSuccess',
            (event, toState) => {
                this.selectMenuItem(toState);
            });

        this.selectMenuItem(this.$state.current);
    }

    isActive = (item) => {
        var path = this.$location.path().toLowerCase() || '/home',
            roots = item.roots || [],
            matchesPath = element => (path.indexOf(element) > -1);

        return roots.some(matchesPath);
    }

    private selectMenuItem = (state: ng.ui.IState) => {
        var splitedPath = state.name.split('.'),
            parentName = splitedPath[0] + '.' + splitedPath[1],
            menuItemFilter = element => (element.sref.indexOf(parentName) > -1);

        var selectedItem = this.menu.filter(menuItemFilter);
        this.selectedMenuItem = selectedItem[0];
    }
}