"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelUpdateManyWithoutMembersInput_1 = require("../inputs/ChannelUpdateManyWithoutMembersInput");
const EnumRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumRoleFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutPostsInput = class UserUpdateWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    })
], UserUpdateWithoutPostsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    })
], UserUpdateWithoutPostsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput_1.EnumRoleFieldUpdateOperationsInput, {
        nullable: true
    })
], UserUpdateWithoutPostsInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelUpdateManyWithoutMembersInput_1.ChannelUpdateManyWithoutMembersInput, {
        nullable: true
    })
], UserUpdateWithoutPostsInput.prototype, "channels", void 0);
UserUpdateWithoutPostsInput = __decorate([
    TypeGraphQL.InputType("UserUpdateWithoutPostsInput", {
        isAbstract: true
    })
], UserUpdateWithoutPostsInput);
exports.UserUpdateWithoutPostsInput = UserUpdateWithoutPostsInput;
