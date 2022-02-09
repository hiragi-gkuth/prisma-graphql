"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChannelScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelScalarWhereWithAggregatesInput = void 0;
const TypeGraphQL = require("type-graphql");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let ChannelScalarWhereWithAggregatesInput = ChannelScalarWhereWithAggregatesInput_1 = class ChannelScalarWhereWithAggregatesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ChannelScalarWhereWithAggregatesInput_1], {
        nullable: true
    })
], ChannelScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelScalarWhereWithAggregatesInput_1], {
        nullable: true
    })
], ChannelScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelScalarWhereWithAggregatesInput_1], {
        nullable: true
    })
], ChannelScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    })
], ChannelScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    })
], ChannelScalarWhereWithAggregatesInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    })
], ChannelScalarWhereWithAggregatesInput.prototype, "description", void 0);
ChannelScalarWhereWithAggregatesInput = ChannelScalarWhereWithAggregatesInput_1 = __decorate([
    TypeGraphQL.InputType("ChannelScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], ChannelScalarWhereWithAggregatesInput);
exports.ChannelScalarWhereWithAggregatesInput = ChannelScalarWhereWithAggregatesInput;
