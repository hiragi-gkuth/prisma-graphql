"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestedEnumRoleWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleWithAggregatesFilter = void 0;
const TypeGraphQL = require("type-graphql");
const NestedEnumRoleFilter_1 = require("../inputs/NestedEnumRoleFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Role_1 = require("../../enums/Role");
let NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter_1 = class NestedEnumRoleWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    })
], NestedEnumRoleWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    })
], NestedEnumRoleWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    })
], NestedEnumRoleWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleWithAggregatesFilter_1, {
        nullable: true
    })
], NestedEnumRoleWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    })
], NestedEnumRoleWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true
    })
], NestedEnumRoleWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true
    })
], NestedEnumRoleWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter_1 = __decorate([
    TypeGraphQL.InputType("NestedEnumRoleWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumRoleWithAggregatesFilter);
exports.NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter;
