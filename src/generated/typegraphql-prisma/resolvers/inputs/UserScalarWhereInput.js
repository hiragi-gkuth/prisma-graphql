"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const EnumRoleFilter_1 = require("../inputs/EnumRoleFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let UserScalarWhereInput = UserScalarWhereInput_1 = class UserScalarWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1], {
        nullable: true
    })
], UserScalarWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1], {
        nullable: true
    })
], UserScalarWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1], {
        nullable: true
    })
], UserScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    })
], UserScalarWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    })
], UserScalarWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    })
], UserScalarWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumRoleFilter_1.EnumRoleFilter, {
        nullable: true
    })
], UserScalarWhereInput.prototype, "role", void 0);
UserScalarWhereInput = UserScalarWhereInput_1 = __decorate([
    TypeGraphQL.InputType("UserScalarWhereInput", {
        isAbstract: true
    })
], UserScalarWhereInput);
exports.UserScalarWhereInput = UserScalarWhereInput;
