"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutChannelsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOrConnectWithoutChannelsInput_1 = require("../inputs/UserCreateOrConnectWithoutChannelsInput");
const UserCreateWithoutChannelsInput_1 = require("../inputs/UserCreateWithoutChannelsInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutChannelsInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutChannelsInput");
const UserUpdateWithWhereUniqueWithoutChannelsInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutChannelsInput");
const UserUpsertWithWhereUniqueWithoutChannelsInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutChannelsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutChannelsInput = class UserUpdateManyWithoutChannelsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutChannelsInput_1.UserCreateWithoutChannelsInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutChannelsInput_1.UserCreateOrConnectWithoutChannelsInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutChannelsInput_1.UserUpsertWithWhereUniqueWithoutChannelsInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutChannelsInput_1.UserUpdateWithWhereUniqueWithoutChannelsInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutChannelsInput_1.UserUpdateManyWithWhereWithoutChannelsInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    })
], UserUpdateManyWithoutChannelsInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutChannelsInput = __decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutChannelsInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutChannelsInput);
exports.UserUpdateManyWithoutChannelsInput = UserUpdateManyWithoutChannelsInput;
