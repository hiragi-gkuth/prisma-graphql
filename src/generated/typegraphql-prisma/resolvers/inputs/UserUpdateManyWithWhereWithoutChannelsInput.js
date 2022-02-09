"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithWhereWithoutChannelsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyMutationInput_1 = require("../inputs/UserUpdateManyMutationInput");
let UserUpdateManyWithWhereWithoutChannelsInput = class UserUpdateManyWithWhereWithoutChannelsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserScalarWhereInput_1.UserScalarWhereInput, {
        nullable: false
    })
], UserUpdateManyWithWhereWithoutChannelsInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyMutationInput_1.UserUpdateManyMutationInput, {
        nullable: false
    })
], UserUpdateManyWithWhereWithoutChannelsInput.prototype, "data", void 0);
UserUpdateManyWithWhereWithoutChannelsInput = __decorate([
    TypeGraphQL.InputType("UserUpdateManyWithWhereWithoutChannelsInput", {
        isAbstract: true
    })
], UserUpdateManyWithWhereWithoutChannelsInput);
exports.UserUpdateManyWithWhereWithoutChannelsInput = UserUpdateManyWithWhereWithoutChannelsInput;
