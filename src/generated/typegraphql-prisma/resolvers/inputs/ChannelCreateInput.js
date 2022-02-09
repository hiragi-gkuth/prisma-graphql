"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateNestedManyWithoutChannelInput_1 = require("../inputs/PostCreateNestedManyWithoutChannelInput");
const UserCreateNestedManyWithoutChannelsInput_1 = require("../inputs/UserCreateNestedManyWithoutChannelsInput");
let ChannelCreateInput = class ChannelCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], ChannelCreateInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    })
], ChannelCreateInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutChannelInput_1.PostCreateNestedManyWithoutChannelInput, {
        nullable: true
    })
], ChannelCreateInput.prototype, "posts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutChannelsInput_1.UserCreateNestedManyWithoutChannelsInput, {
        nullable: true
    })
], ChannelCreateInput.prototype, "members", void 0);
ChannelCreateInput = __decorate([
    TypeGraphQL.InputType("ChannelCreateInput", {
        isAbstract: true
    })
], ChannelCreateInput);
exports.ChannelCreateInput = ChannelCreateInput;
