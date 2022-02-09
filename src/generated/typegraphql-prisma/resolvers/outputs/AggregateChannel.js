"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChannel = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelAvgAggregate_1 = require("../outputs/ChannelAvgAggregate");
const ChannelCountAggregate_1 = require("../outputs/ChannelCountAggregate");
const ChannelMaxAggregate_1 = require("../outputs/ChannelMaxAggregate");
const ChannelMinAggregate_1 = require("../outputs/ChannelMinAggregate");
const ChannelSumAggregate_1 = require("../outputs/ChannelSumAggregate");
let AggregateChannel = class AggregateChannel {
};
__decorate([
    TypeGraphQL.Field(_type => ChannelCountAggregate_1.ChannelCountAggregate, {
        nullable: true
    })
], AggregateChannel.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelAvgAggregate_1.ChannelAvgAggregate, {
        nullable: true
    })
], AggregateChannel.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelSumAggregate_1.ChannelSumAggregate, {
        nullable: true
    })
], AggregateChannel.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelMinAggregate_1.ChannelMinAggregate, {
        nullable: true
    })
], AggregateChannel.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelMaxAggregate_1.ChannelMaxAggregate, {
        nullable: true
    })
], AggregateChannel.prototype, "_max", void 0);
AggregateChannel = __decorate([
    TypeGraphQL.ObjectType("AggregateChannel", {
        isAbstract: true
    })
], AggregateChannel);
exports.AggregateChannel = AggregateChannel;
