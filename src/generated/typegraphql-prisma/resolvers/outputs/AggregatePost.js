"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePost = void 0;
const TypeGraphQL = require("type-graphql");
const PostAvgAggregate_1 = require("../outputs/PostAvgAggregate");
const PostCountAggregate_1 = require("../outputs/PostCountAggregate");
const PostMaxAggregate_1 = require("../outputs/PostMaxAggregate");
const PostMinAggregate_1 = require("../outputs/PostMinAggregate");
const PostSumAggregate_1 = require("../outputs/PostSumAggregate");
let AggregatePost = class AggregatePost {
};
__decorate([
    TypeGraphQL.Field(_type => PostCountAggregate_1.PostCountAggregate, {
        nullable: true
    })
], AggregatePost.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostAvgAggregate_1.PostAvgAggregate, {
        nullable: true
    })
], AggregatePost.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostSumAggregate_1.PostSumAggregate, {
        nullable: true
    })
], AggregatePost.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMinAggregate_1.PostMinAggregate, {
        nullable: true
    })
], AggregatePost.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMaxAggregate_1.PostMaxAggregate, {
        nullable: true
    })
], AggregatePost.prototype, "_max", void 0);
AggregatePost = __decorate([
    TypeGraphQL.ObjectType("AggregatePost", {
        isAbstract: true
    })
], AggregatePost);
exports.AggregatePost = AggregatePost;
