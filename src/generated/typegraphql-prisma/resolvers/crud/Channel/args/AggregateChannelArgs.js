"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChannelArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelOrderByWithRelationInput_1 = require("../../../inputs/ChannelOrderByWithRelationInput");
const ChannelWhereInput_1 = require("../../../inputs/ChannelWhereInput");
const ChannelWhereUniqueInput_1 = require("../../../inputs/ChannelWhereUniqueInput");
let AggregateChannelArgs = class AggregateChannelArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ChannelWhereInput_1.ChannelWhereInput, {
        nullable: true
    })
], AggregateChannelArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelOrderByWithRelationInput_1.ChannelOrderByWithRelationInput], {
        nullable: true
    })
], AggregateChannelArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelWhereUniqueInput_1.ChannelWhereUniqueInput, {
        nullable: true
    })
], AggregateChannelArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], AggregateChannelArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], AggregateChannelArgs.prototype, "skip", void 0);
AggregateChannelArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateChannelArgs);
exports.AggregateChannelArgs = AggregateChannelArgs;
