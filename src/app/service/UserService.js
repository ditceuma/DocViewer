"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Service_1 = require("./Service");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var User_1 = require("./../models/User");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(_http) {
        return _super.call(this, _http) || this;
    }
    UserService.prototype.addUser = function (user) {
        return this.post('user-api/save', user);
    };
    UserService.prototype.loadUsers = function () {
        var users = [];
        this.get('user-api/findAllUsers', '').subscribe(function (response) {
            response.map(function (user) {
                users.push(new User_1.User(user));
            });
        });
        return users;
    };
    return UserService;
}(Service_1.Service));
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map