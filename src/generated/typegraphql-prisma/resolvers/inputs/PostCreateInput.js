"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateNestedOneWithoutPostsInput_1 = require("../inputs/ChannelCreateNestedOneWithoutPostsInput");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
let PostCreateInput = class PostCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], PostCreateInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostCreateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    })
], PostCreateInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateNestedOneWithoutPostsInput_1.ChannelCreateNestedOneWithoutPostsInput, {
        nullable: false
    })
], PostCreateInput.prototype, "channel", void 0);
PostCreateInput = __decorate([
    TypeGraphQL.InputType("PostCreateInput", {
        isAbstract: true
    })
], PostCreateInput);
exports.PostCreateInput = PostCreateInput;
