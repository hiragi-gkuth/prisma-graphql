"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutChannelInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateWithoutChannelInput_1 = require("../inputs/PostCreateWithoutChannelInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutChannelInput = class PostCreateOrConnectWithoutChannelInput {
};
__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    })
], PostCreateOrConnectWithoutChannelInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutChannelInput_1.PostCreateWithoutChannelInput, {
        nullable: false
    })
], PostCreateOrConnectWithoutChannelInput.prototype, "create", void 0);
PostCreateOrConnectWithoutChannelInput = __decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutChannelInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutChannelInput);
exports.PostCreateOrConnectWithoutChannelInput = PostCreateOrConnectWithoutChannelInput;
