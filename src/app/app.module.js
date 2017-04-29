"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var angular2_datatable_1 = require("angular2-datatable");
var http_1 = require("@angular/http");
var login_component_1 = require("./components/login/login.component");
var doc_component_1 = require("./components/doc/doc.component");
var app_component_1 = require("./app.component");
var admin_component_1 = require("./components/admin/general/admin.component");
var admin_project_component_1 = require("./components/admin/project/admin.project.component");
var admin_register_user_component_1 = require("./components/admin/register-user/admin.register.user.component");
var admin_manager_user_component_1 = require("./components/admin/manager-user/admin.manager.user.component");
var routes_general_1 = require("./routes.general");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            angular2_datatable_1.DataTableModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            routes_general_1.routing
        ],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, doc_component_1.DocComponent, admin_component_1.AdminComponent, admin_register_user_component_1.RegisterUserComponent, admin_manager_user_component_1.ManagerUserComponent, admin_project_component_1.ProjectComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map