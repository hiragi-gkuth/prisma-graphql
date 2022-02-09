"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutChannelsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateWithoutChannelsInput_1 = require("../inputs/UserCreateWithoutChannelsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutChannelsInput = class UserCreateOrConnectWithoutChannelsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    })
], UserCreateOrConnectWithoutChannelsInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutChannelsInput_1.UserCreateWithoutChannelsInput, {
        nullable: false
    })
], UserCreateOrConnectWithoutChannelsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutChannelsInput = __decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutChannelsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutChannelsInput);
exports.UserCreateOrConnectWithoutChannelsInput = UserCreateOrConnectWithoutChannelsInput;
