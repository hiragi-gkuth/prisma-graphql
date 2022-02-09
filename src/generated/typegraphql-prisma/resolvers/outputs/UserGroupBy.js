"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupBy = void 0;
const TypeGraphQL = require("type-graphql");
const UserAvgAggregate_1 = require("../outputs/UserAvgAggregate");
const UserCountAggregate_1 = require("../outputs/UserCountAggregate");
const UserMaxAggregate_1 = require("../outputs/UserMaxAggregate");
const UserMinAggregate_1 = require("../outputs/UserMinAggregate");
const UserSumAggregate_1 = require("../outputs/UserSumAggregate");
const Role_1 = require("../../enums/Role");
let UserGroupBy = class UserGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    })
], UserGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], UserGroupBy.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], UserGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: false
    })
], UserGroupBy.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCountAggregate_1.UserCountAggregate, {
        nullable: true
    })
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserAvgAggregate_1.UserAvgAggregate, {
        nullable: true
    })
], UserGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSumAggregate_1.UserSumAggregate, {
        nullable: true
    })
], UserGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserMinAggregate_1.UserMinAggregate, {
        nullable: true
    })
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserMaxAggregate_1.UserMaxAggregate, {
        nullable: true
    })
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = __decorate([
    TypeGraphQL.ObjectType("UserGroupBy", {
        isAbstract: true
    })
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
