"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutChannelInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateWithoutChannelInput_1 = require("../inputs/PostCreateWithoutChannelInput");
const PostUpdateWithoutChannelInput_1 = require("../inputs/PostUpdateWithoutChannelInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutChannelInput = class PostUpsertWithWhereUniqueWithoutChannelInput {
};
__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    })
], PostUpsertWithWhereUniqueWithoutChannelInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutChannelInput_1.PostUpdateWithoutChannelInput, {
        nullable: false
    })
], PostUpsertWithWhereUniqueWithoutChannelInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutChannelInput_1.PostCreateWithoutChannelInput, {
        nullable: false
    })
], PostUpsertWithWhereUniqueWithoutChannelInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutChannelInput = __decorate([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutChannelInput", {
        isAbstract: true
    })
], PostUpsertWithWhereUniqueWithoutChannelInput);
exports.PostUpsertWithWhereUniqueWithoutChannelInput = PostUpsertWithWhereUniqueWithoutChannelInput;
