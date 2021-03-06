"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestedEnumRoleFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleFilter = void 0;
const TypeGraphQL = require("type-graphql");
const Role_1 = require("../../enums/Role");
let NestedEnumRoleFilter = NestedEnumRoleFilter_1 = class NestedEnumRoleFilter {
};
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    })
], NestedEnumRoleFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    })
], NestedEnumRoleFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    })
], NestedEnumRoleFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1, {
        nullable: true
    })
], NestedEnumRoleFilter.prototype, "not", void 0);
NestedEnumRoleFilter = NestedEnumRoleFilter_1 = __decorate([
    TypeGraphQL.InputType("NestedEnumRoleFilter", {
        isAbstract: true
    })
], NestedEnumRoleFilter);
exports.NestedEnumRoleFilter = NestedEnumRoleFilter;
