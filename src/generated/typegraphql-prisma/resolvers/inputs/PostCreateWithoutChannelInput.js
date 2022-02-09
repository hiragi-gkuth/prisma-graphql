"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutChannelInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
let PostCreateWithoutChannelInput = class PostCreateWithoutChannelInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], PostCreateWithoutChannelInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostCreateWithoutChannelInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostCreateWithoutChannelInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    })
], PostCreateWithoutChannelInput.prototype, "author", void 0);
PostCreateWithoutChannelInput = __decorate([
    TypeGraphQL.InputType("PostCreateWithoutChannelInput", {
        isAbstract: true
    })
], PostCreateWithoutChannelInput);
exports.PostCreateWithoutChannelInput = PostCreateWithoutChannelInput;
