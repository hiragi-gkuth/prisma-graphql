"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUpdateWithoutMembersInput = void 0;
const TypeGraphQL = require("type-graphql");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutChannelInput_1 = require("../inputs/PostUpdateManyWithoutChannelInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ChannelUpdateWithoutMembersInput = class ChannelUpdateWithoutMembersInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    })
], ChannelUpdateWithoutMembersInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    })
], ChannelUpdateWithoutMembersInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutChannelInput_1.PostUpdateManyWithoutChannelInput, {
        nullable: true
    })
], ChannelUpdateWithoutMembersInput.prototype, "posts", void 0);
ChannelUpdateWithoutMembersInput = __decorate([
    TypeGraphQL.InputType("ChannelUpdateWithoutMembersInput", {
        isAbstract: true
    })
], ChannelUpdateWithoutMembersInput);
exports.ChannelUpdateWithoutMembersInput = ChannelUpdateWithoutMembersInput;
