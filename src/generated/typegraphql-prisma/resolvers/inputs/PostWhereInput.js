"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PostWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelRelationFilter_1 = require("../inputs/ChannelRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PostWhereInput = PostWhereInput_1 = class PostWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true
    })
], PostWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true
    })
], PostWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true
    })
], PostWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    })
], PostWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    })
], PostWhereInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    })
], PostWhereInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    })
], PostWhereInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelRelationFilter_1.ChannelRelationFilter, {
        nullable: true
    })
], PostWhereInput.prototype, "channel", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    })
], PostWhereInput.prototype, "channelId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    })
], PostWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    })
], PostWhereInput.prototype, "updatedAt", void 0);
PostWhereInput = PostWhereInput_1 = __decorate([
    TypeGraphQL.InputType("PostWhereInput", {
        isAbstract: true
    })
], PostWhereInput);
exports.PostWhereInput = PostWhereInput;
