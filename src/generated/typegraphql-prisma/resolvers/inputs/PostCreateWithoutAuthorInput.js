"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateNestedOneWithoutPostsInput_1 = require("../inputs/ChannelCreateNestedOneWithoutPostsInput");
let PostCreateWithoutAuthorInput = class PostCreateWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], PostCreateWithoutAuthorInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostCreateWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateNestedOneWithoutPostsInput_1.ChannelCreateNestedOneWithoutPostsInput, {
        nullable: false
    })
], PostCreateWithoutAuthorInput.prototype, "channel", void 0);
PostCreateWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("PostCreateWithoutAuthorInput", {
        isAbstract: true
    })
], PostCreateWithoutAuthorInput);
exports.PostCreateWithoutAuthorInput = PostCreateWithoutAuthorInput;
