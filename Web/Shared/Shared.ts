/// <reference path="Services/DataStoreService.ts"/>
/// <reference path="Directives/SubmitAttemptDirective.ts"/>
/// <reference path="Directives/CompileDirective.ts"/>

var appSharedModule = 'Shared';
angular.module(appSharedModule, [])
    .directive(SubmitAttemptDirective.directiveId, [() => new SubmitAttemptDirective()])
    .directive(CompileDirective.directiveId, ['$timeout', '$compile', ($timeout, $compile) => new CompileDirective($timeout, $compile)])
    .service(DataStoreService.serviceId, [DataStoreService]);