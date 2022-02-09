"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutChannelsInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
const Role_1 = require("../../enums/Role");
let UserCreateWithoutChannelsInput = class UserCreateWithoutChannelsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], UserCreateWithoutChannelsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], UserCreateWithoutChannelsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    })
], UserCreateWithoutChannelsInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    })
], UserCreateWithoutChannelsInput.prototype, "posts", void 0);
UserCreateWithoutChannelsInput = __decorate([
    TypeGraphQL.InputType("UserCreateWithoutChannelsInput", {
        isAbstract: true
    })
], UserCreateWithoutChannelsInput);
exports.UserCreateWithoutChannelsInput = UserCreateWithoutChannelsInput;
