"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationFilter = void 0;
const TypeGraphQL = require("type-graphql");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserRelationFilter = class UserRelationFilter {
};
__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    })
], UserRelationFilter.prototype, "is", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    })
], UserRelationFilter.prototype, "isNot", void 0);
UserRelationFilter = __decorate([
    TypeGraphQL.InputType("UserRelationFilter", {
        isAbstract: true
    })
], UserRelationFilter);
exports.UserRelationFilter = UserRelationFilter;
