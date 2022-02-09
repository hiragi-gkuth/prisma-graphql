"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleWithAggregatesFilter = void 0;
const TypeGraphQL = require("type-graphql");
const NestedEnumRoleFilter_1 = require("../inputs/NestedEnumRoleFilter");
const NestedEnumRoleWithAggregatesFilter_1 = require("../inputs/NestedEnumRoleWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Role_1 = require("../../enums/Role");
let EnumRoleWithAggregatesFilter = class EnumRoleWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    })
], EnumRoleWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    })
], EnumRoleWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    })
], EnumRoleWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleWithAggregatesFilter_1.NestedEnumRoleWithAggregatesFilter, {
        nullable: true
    })
], EnumRoleWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    })
], EnumRoleWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true
    })
], EnumRoleWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true
    })
], EnumRoleWithAggregatesFilter.prototype, "_max", void 0);
EnumRoleWithAggregatesFilter = __decorate([
    TypeGraphQL.InputType("EnumRoleWithAggregatesFilter", {
        isAbstract: true
    })
], EnumRoleWithAggregatesFilter);
exports.EnumRoleWithAggregatesFilter = EnumRoleWithAggregatesFilter;
