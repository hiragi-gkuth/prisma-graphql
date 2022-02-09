"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutChannelsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOrConnectWithoutChannelsInput_1 = require("../inputs/UserCreateOrConnectWithoutChannelsInput");
const UserCreateWithoutChannelsInput_1 = require("../inputs/UserCreateWithoutChannelsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutChannelsInput = class UserCreateNestedManyWithoutChannelsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutChannelsInput_1.UserCreateWithoutChannelsInput], {
        nullable: true
    })
], UserCreateNestedManyWithoutChannelsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutChannelsInput_1.UserCreateOrConnectWithoutChannelsInput], {
        nullable: true
    })
], UserCreateNestedManyWithoutChannelsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    })
], UserCreateNestedManyWithoutChannelsInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutChannelsInput = __decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutChannelsInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutChannelsInput);
exports.UserCreateNestedManyWithoutChannelsInput = UserCreateNestedManyWithoutChannelsInput;
