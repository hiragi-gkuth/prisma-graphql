"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithAggregationInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostAvgOrderByAggregateInput_1 = require("../inputs/PostAvgOrderByAggregateInput");
const PostCountOrderByAggregateInput_1 = require("../inputs/PostCountOrderByAggregateInput");
const PostMaxOrderByAggregateInput_1 = require("../inputs/PostMaxOrderByAggregateInput");
const PostMinOrderByAggregateInput_1 = require("../inputs/PostMinOrderByAggregateInput");
const PostSumOrderByAggregateInput_1 = require("../inputs/PostSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostOrderByWithAggregationInput = class PostOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "channelId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCountOrderByAggregateInput_1.PostCountOrderByAggregateInput, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostAvgOrderByAggregateInput_1.PostAvgOrderByAggregateInput, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMaxOrderByAggregateInput_1.PostMaxOrderByAggregateInput, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMinOrderByAggregateInput_1.PostMinOrderByAggregateInput, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostSumOrderByAggregateInput_1.PostSumOrderByAggregateInput, {
        nullable: true
    })
], PostOrderByWithAggregationInput.prototype, "_sum", void 0);
PostOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("PostOrderByWithAggregationInput", {
        isAbstract: true
    })
], PostOrderByWithAggregationInput);
exports.PostOrderByWithAggregationInput = PostOrderByWithAggregationInput;
