"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutChannelsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserUpdateWithoutChannelsInput_1 = require("../inputs/UserUpdateWithoutChannelsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutChannelsInput = class UserUpdateWithWhereUniqueWithoutChannelsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    })
], UserUpdateWithWhereUniqueWithoutChannelsInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutChannelsInput_1.UserUpdateWithoutChannelsInput, {
        nullable: false
    })
], UserUpdateWithWhereUniqueWithoutChannelsInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutChannelsInput = __decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutChannelsInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutChannelsInput);
exports.UserUpdateWithWhereUniqueWithoutChannelsInput = UserUpdateWithWhereUniqueWithoutChannelsInput;
