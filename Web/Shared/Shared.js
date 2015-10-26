/// <reference path="Services/DataStoreService.ts"/>
/// <reference path="Directives/SubmitAttemptDirective.ts"/>
/// <reference path="Directives/CompileDirective.ts"/>
var appSharedModule = 'Shared';
angular.module(appSharedModule, []).directive(SubmitAttemptDirective.directiveId, [function () { return new SubmitAttemptDirective(); }]).directive(CompileDirective.directiveId, ['$timeout', '$compile', function ($timeout, $compile) { return new CompileDirective($timeout, $compile); }]).service(DataStoreService.serviceId, [DataStoreService]);
//# sourceMappingURL=Shared.js.map