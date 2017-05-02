"use strict";
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
var core_1 = require("@angular/core");
var UserService_1 = require("./../../../service/UserService");
var User_1 = require("./../../../models/User");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/catch");
var RegisterUserComponent = (function () {
    function RegisterUserComponent(_userService) {
        this._userService = _userService;
        this.msgs = [];
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    RegisterUserComponent.prototype.registerUser = function (form) {
        var _this = this;
        if (this.validationSuccessfully(form)) {
            this._userService.addUser(new User_1.User(form)).subscribe(function (data) { console.log(new User_1.User(form)); }, function (error) { _this.msgs.push({ summary: 'Erro interno x.x', detail: error, severity: 'error' }); }, function () {
                _this.msgs = [];
                _this.msgs.push({ summary: "Atenção", detail: 'Usuário inserido com sucesso :)', severity: 'info' });
            });
        }
    };
    RegisterUserComponent.prototype.validationSuccessfully = function (form) {
        var validated = true;
        this.msgs = [];
        if ((form.confirmPassword != form.password) && (form.password != '' && form.confirmPassword != '')) {
            this.msgs.push({ summary: "Erro de validação", detail: 'As senhas digitadas são diferentes, por favor verifique', severity: 'error' });
            validated = false;
        }
        if (typeof form.username == 'undefined' || form.username == '') {
            this.msgs.push({ summary: "Erro de validação", detail: 'O campo \'Username\' é obrigatório, por favor verifique', severity: 'error' });
            validated = false;
        }
        if (typeof form.password == 'undefined' || form.password == '') {
            this.msgs.push({ summary: "Erro de validação", detail: 'O campo \'Senha\' é obrigatório, por favor verifique', severity: 'error' });
            validated = false;
        }
        if (typeof form.confirmPassword == 'undefined' || form.confirmPassword == '') {
            this.msgs.push({ summary: "Erro de validação", detail: 'Você precisa confirmar sua senha no campo \'Digite a senha novamente\', por favor verifique', severity: 'error' });
            validated = false;
        }
        return validated;
    };
    return RegisterUserComponent;
}());
RegisterUserComponent = __decorate([
    core_1.Component({
        selector: 'register-use-admin-form',
        templateUrl: './register-use.html',
        styleUrls: ['./../../../../assets/css/light-bootstrap-dashboard.css', './../../../../assets/css/demo.css'],
        providers: [UserService_1.UserService]
    }),
    __metadata("design:paramtypes", [UserService_1.UserService])
], RegisterUserComponent);
exports.RegisterUserComponent = RegisterUserComponent;
//# sourceMappingURL=admin.register.user.component.js.map