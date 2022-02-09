"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUpsertWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateWithoutPostsInput_1 = require("../inputs/ChannelCreateWithoutPostsInput");
const ChannelUpdateWithoutPostsInput_1 = require("../inputs/ChannelUpdateWithoutPostsInput");
let ChannelUpsertWithoutPostsInput = class ChannelUpsertWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => ChannelUpdateWithoutPostsInput_1.ChannelUpdateWithoutPostsInput, {
        nullable: false
    })
], ChannelUpsertWithoutPostsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateWithoutPostsInput_1.ChannelCreateWithoutPostsInput, {
        nullable: false
    })
], ChannelUpsertWithoutPostsInput.prototype, "create", void 0);
ChannelUpsertWithoutPostsInput = __decorate([
    TypeGraphQL.InputType("ChannelUpsertWithoutPostsInput", {
        isAbstract: true
    })
], ChannelUpsertWithoutPostsInput);
exports.ChannelUpsertWithoutPostsInput = ChannelUpsertWithoutPostsInput;
