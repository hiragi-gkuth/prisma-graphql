"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyChannelInputEnvelope = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateManyChannelInput_1 = require("../inputs/PostCreateManyChannelInput");
let PostCreateManyChannelInputEnvelope = class PostCreateManyChannelInputEnvelope {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyChannelInput_1.PostCreateManyChannelInput], {
        nullable: false
    })
], PostCreateManyChannelInputEnvelope.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
], PostCreateManyChannelInputEnvelope.prototype, "skipDuplicates", void 0);
PostCreateManyChannelInputEnvelope = __decorate([
    TypeGraphQL.InputType("PostCreateManyChannelInputEnvelope", {
        isAbstract: true
    })
], PostCreateManyChannelInputEnvelope);
exports.PostCreateManyChannelInputEnvelope = PostCreateManyChannelInputEnvelope;
