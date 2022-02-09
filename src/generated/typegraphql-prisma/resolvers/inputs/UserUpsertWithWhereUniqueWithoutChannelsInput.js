"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutChannelsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateWithoutChannelsInput_1 = require("../inputs/UserCreateWithoutChannelsInput");
const UserUpdateWithoutChannelsInput_1 = require("../inputs/UserUpdateWithoutChannelsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutChannelsInput = class UserUpsertWithWhereUniqueWithoutChannelsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    })
], UserUpsertWithWhereUniqueWithoutChannelsInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutChannelsInput_1.UserUpdateWithoutChannelsInput, {
        nullable: false
    })
], UserUpsertWithWhereUniqueWithoutChannelsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutChannelsInput_1.UserCreateWithoutChannelsInput, {
        nullable: false
    })
], UserUpsertWithWhereUniqueWithoutChannelsInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutChannelsInput = __decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutChannelsInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutChannelsInput);
exports.UserUpsertWithWhereUniqueWithoutChannelsInput = UserUpsertWithWhereUniqueWithoutChannelsInput;
