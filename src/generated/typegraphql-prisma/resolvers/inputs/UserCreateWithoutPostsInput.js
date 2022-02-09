"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateNestedManyWithoutMembersInput_1 = require("../inputs/ChannelCreateNestedManyWithoutMembersInput");
const Role_1 = require("../../enums/Role");
let UserCreateWithoutPostsInput = class UserCreateWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], UserCreateWithoutPostsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], UserCreateWithoutPostsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    })
], UserCreateWithoutPostsInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateNestedManyWithoutMembersInput_1.ChannelCreateNestedManyWithoutMembersInput, {
        nullable: true
    })
], UserCreateWithoutPostsInput.prototype, "channels", void 0);
UserCreateWithoutPostsInput = __decorate([
    TypeGraphQL.InputType("UserCreateWithoutPostsInput", {
        isAbstract: true
    })
], UserCreateWithoutPostsInput);
exports.UserCreateWithoutPostsInput = UserCreateWithoutPostsInput;
