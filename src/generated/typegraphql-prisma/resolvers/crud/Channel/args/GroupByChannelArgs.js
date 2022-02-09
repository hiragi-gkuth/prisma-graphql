"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByChannelArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelOrderByWithAggregationInput_1 = require("../../../inputs/ChannelOrderByWithAggregationInput");
const ChannelScalarWhereWithAggregatesInput_1 = require("../../../inputs/ChannelScalarWhereWithAggregatesInput");
const ChannelWhereInput_1 = require("../../../inputs/ChannelWhereInput");
const ChannelScalarFieldEnum_1 = require("../../../../enums/ChannelScalarFieldEnum");
let GroupByChannelArgs = class GroupByChannelArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ChannelWhereInput_1.ChannelWhereInput, {
        nullable: true
    })
], GroupByChannelArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelOrderByWithAggregationInput_1.ChannelOrderByWithAggregationInput], {
        nullable: true
    })
], GroupByChannelArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelScalarFieldEnum_1.ChannelScalarFieldEnum], {
        nullable: false
    })
], GroupByChannelArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelScalarWhereWithAggregatesInput_1.ChannelScalarWhereWithAggregatesInput, {
        nullable: true
    })
], GroupByChannelArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], GroupByChannelArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], GroupByChannelArgs.prototype, "skip", void 0);
GroupByChannelArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByChannelArgs);
exports.GroupByChannelArgs = GroupByChannelArgs;
