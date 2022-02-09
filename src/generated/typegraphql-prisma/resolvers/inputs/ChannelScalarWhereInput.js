"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChannelScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelScalarWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ChannelScalarWhereInput = ChannelScalarWhereInput_1 = class ChannelScalarWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ChannelScalarWhereInput_1], {
        nullable: true
    })
], ChannelScalarWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelScalarWhereInput_1], {
        nullable: true
    })
], ChannelScalarWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelScalarWhereInput_1], {
        nullable: true
    })
], ChannelScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    })
], ChannelScalarWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    })
], ChannelScalarWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    })
], ChannelScalarWhereInput.prototype, "description", void 0);
ChannelScalarWhereInput = ChannelScalarWhereInput_1 = __decorate([
    TypeGraphQL.InputType("ChannelScalarWhereInput", {
        isAbstract: true
    })
], ChannelScalarWhereInput);
exports.ChannelScalarWhereInput = ChannelScalarWhereInput;
