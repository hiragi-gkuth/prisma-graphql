"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelCreateWithoutMembersInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateNestedManyWithoutChannelInput_1 = require("../inputs/PostCreateNestedManyWithoutChannelInput");
let ChannelCreateWithoutMembersInput = class ChannelCreateWithoutMembersInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], ChannelCreateWithoutMembersInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    })
], ChannelCreateWithoutMembersInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutChannelInput_1.PostCreateNestedManyWithoutChannelInput, {
        nullable: true
    })
], ChannelCreateWithoutMembersInput.prototype, "posts", void 0);
ChannelCreateWithoutMembersInput = __decorate([
    TypeGraphQL.InputType("ChannelCreateWithoutMembersInput", {
        isAbstract: true
    })
], ChannelCreateWithoutMembersInput);
exports.ChannelCreateWithoutMembersInput = ChannelCreateWithoutMembersInput;
