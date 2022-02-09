"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutChannelInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateManyChannelInputEnvelope_1 = require("../inputs/PostCreateManyChannelInputEnvelope");
const PostCreateOrConnectWithoutChannelInput_1 = require("../inputs/PostCreateOrConnectWithoutChannelInput");
const PostCreateWithoutChannelInput_1 = require("../inputs/PostCreateWithoutChannelInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutChannelInput = class PostCreateNestedManyWithoutChannelInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutChannelInput_1.PostCreateWithoutChannelInput], {
        nullable: true
    })
], PostCreateNestedManyWithoutChannelInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutChannelInput_1.PostCreateOrConnectWithoutChannelInput], {
        nullable: true
    })
], PostCreateNestedManyWithoutChannelInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateManyChannelInputEnvelope_1.PostCreateManyChannelInputEnvelope, {
        nullable: true
    })
], PostCreateNestedManyWithoutChannelInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    })
], PostCreateNestedManyWithoutChannelInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutChannelInput = __decorate([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutChannelInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutChannelInput);
exports.PostCreateNestedManyWithoutChannelInput = PostCreateNestedManyWithoutChannelInput;
