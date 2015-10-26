/// <reference path="Controllers/FormBuilderController.ts"/>
/// <reference path="Services/FormBuilderService.ts"/>
/// <reference path="Directives/FormBuilderPanelDirective.ts"/>

var appFormBuilderModule = 'FormBuilder';
angular.module(appFormBuilderModule, [])
    .controller(FormBuilderController.controllerId, FormBuilderController)
    .directive(FormBuilderPanelDirective.directiveId, ['$sce', ($sce) => new FormBuilderPanelDirective($sce)])
    .service(FormBuilderService.serviceId, [FormBuilderService]);