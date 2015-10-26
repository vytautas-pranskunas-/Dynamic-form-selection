/// <reference path="App/AppStructure.ts"/>
/// <reference path="Shared/Shared.ts"/>
/// <reference path="FormBuilder/FormBuilder.ts"/>
/// <reference path="FormViewer/FormViewer.ts"/>

var dependencies = [
    'ui.router',
    appStructureModule,
    appSharedModule,
    appFormBuilderModule,
    appFormViewerModule
];

var app = angular.module('dynamicForm', dependencies);

app.config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/form-builder');

    $stateProvider.state('app',
        {
            views: {
                'header': {
                    templateUrl: 'Web/App/Views/header.html'
                }
            }
        })
        .state('app.formBuilder', {
            url: '/form-builder',
            views: {
                'content@': { templateUrl: 'Web/FormBuilder/Views/form-builder.html' }
            }
        })
        .state('app.formViewer', {
        url: '/form-viewer',
            views: {
                'content@': { templateUrl: 'Web/FormViewer/Views/form-viewer.html' }
            }
        });

});