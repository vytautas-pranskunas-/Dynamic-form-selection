/// <reference path="Controllers/FormViewerController.ts"/>
/// <reference path="Directives/FormElementDirective.ts"/>

var appFormViewerModule = 'FormViewer';
angular.module(appFormViewerModule, [])
    .controller(FormViewerController.controllerId, FormViewerController)
    .directive(FormElementDirective.directiveId, ['$sce', ($sce) => new FormElementDirective($sce)]);
