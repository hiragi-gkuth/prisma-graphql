"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUserArgs = void 0;
const TypeGraphQL = require("type-graphql");
const UserUpdateManyMutationInput_1 = require("../../../inputs/UserUpdateManyMutationInput");
const UserWhereInput_1 = require("../../../inputs/UserWhereInput");
let UpdateManyUserArgs = class UpdateManyUserArgs {
};
__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyMutationInput_1.UserUpdateManyMutationInput, {
        nullable: false
    })
], UpdateManyUserArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    })
], UpdateManyUserArgs.prototype, "where", void 0);
UpdateManyUserArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUserArgs);
exports.UpdateManyUserArgs = UpdateManyUserArgs;
