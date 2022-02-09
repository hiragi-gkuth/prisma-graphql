"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelCreateWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateNestedManyWithoutChannelsInput_1 = require("../inputs/UserCreateNestedManyWithoutChannelsInput");
let ChannelCreateWithoutPostsInput = class ChannelCreateWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], ChannelCreateWithoutPostsInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    })
], ChannelCreateWithoutPostsInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutChannelsInput_1.UserCreateNestedManyWithoutChannelsInput, {
        nullable: true
    })
], ChannelCreateWithoutPostsInput.prototype, "members", void 0);
ChannelCreateWithoutPostsInput = __decorate([
    TypeGraphQL.InputType("ChannelCreateWithoutPostsInput", {
        isAbstract: true
    })
], ChannelCreateWithoutPostsInput);
exports.ChannelCreateWithoutPostsInput = ChannelCreateWithoutPostsInput;
