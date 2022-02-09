"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelOrderByWithAggregationInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelAvgOrderByAggregateInput_1 = require("../inputs/ChannelAvgOrderByAggregateInput");
const ChannelCountOrderByAggregateInput_1 = require("../inputs/ChannelCountOrderByAggregateInput");
const ChannelMaxOrderByAggregateInput_1 = require("../inputs/ChannelMaxOrderByAggregateInput");
const ChannelMinOrderByAggregateInput_1 = require("../inputs/ChannelMinOrderByAggregateInput");
const ChannelSumOrderByAggregateInput_1 = require("../inputs/ChannelSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ChannelOrderByWithAggregationInput = class ChannelOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], ChannelOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], ChannelOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], ChannelOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelCountOrderByAggregateInput_1.ChannelCountOrderByAggregateInput, {
        nullable: true
    })
], ChannelOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelAvgOrderByAggregateInput_1.ChannelAvgOrderByAggregateInput, {
        nullable: true
    })
], ChannelOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelMaxOrderByAggregateInput_1.ChannelMaxOrderByAggregateInput, {
        nullable: true
    })
], ChannelOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelMinOrderByAggregateInput_1.ChannelMinOrderByAggregateInput, {
        nullable: true
    })
], ChannelOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelSumOrderByAggregateInput_1.ChannelSumOrderByAggregateInput, {
        nullable: true
    })
], ChannelOrderByWithAggregationInput.prototype, "_sum", void 0);
ChannelOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("ChannelOrderByWithAggregationInput", {
        isAbstract: true
    })
], ChannelOrderByWithAggregationInput);
exports.ChannelOrderByWithAggregationInput = ChannelOrderByWithAggregationInput;
