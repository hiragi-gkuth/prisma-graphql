"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyChannelInput = void 0;
const TypeGraphQL = require("type-graphql");
let PostCreateManyChannelInput = class PostCreateManyChannelInput {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], PostCreateManyChannelInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], PostCreateManyChannelInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    })
], PostCreateManyChannelInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostCreateManyChannelInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostCreateManyChannelInput.prototype, "updatedAt", void 0);
PostCreateManyChannelInput = __decorate([
    TypeGraphQL.InputType("PostCreateManyChannelInput", {
        isAbstract: true
    })
], PostCreateManyChannelInput);
exports.PostCreateManyChannelInput = PostCreateManyChannelInput;
