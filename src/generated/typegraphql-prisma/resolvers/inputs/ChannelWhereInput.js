"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChannelWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const IntFilter_1 = require("../inputs/IntFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let ChannelWhereInput = ChannelWhereInput_1 = class ChannelWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ChannelWhereInput_1], {
        nullable: true
    })
], ChannelWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelWhereInput_1], {
        nullable: true
    })
], ChannelWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelWhereInput_1], {
        nullable: true
    })
], ChannelWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    })
], ChannelWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    })
], ChannelWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    })
], ChannelWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    })
], ChannelWhereInput.prototype, "posts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    })
], ChannelWhereInput.prototype, "members", void 0);
ChannelWhereInput = ChannelWhereInput_1 = __decorate([
    TypeGraphQL.InputType("ChannelWhereInput", {
        isAbstract: true
    })
], ChannelWhereInput);
exports.ChannelWhereInput = ChannelWhereInput;
