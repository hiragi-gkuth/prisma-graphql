"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPostArgs = void 0;
const TypeGraphQL = require("type-graphql");
const PostOrderByWithRelationInput_1 = require("../../../inputs/PostOrderByWithRelationInput");
const PostWhereInput_1 = require("../../../inputs/PostWhereInput");
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
const PostScalarFieldEnum_1 = require("../../../../enums/PostScalarFieldEnum");
let FindFirstPostArgs = class FindFirstPostArgs {
};
__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    })
], FindFirstPostArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostOrderByWithRelationInput_1.PostOrderByWithRelationInput], {
        nullable: true
    })
], FindFirstPostArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    })
], FindFirstPostArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], FindFirstPostArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], FindFirstPostArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostScalarFieldEnum_1.PostScalarFieldEnum], {
        nullable: true
    })
], FindFirstPostArgs.prototype, "distinct", void 0);
FindFirstPostArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstPostArgs);
exports.FindFirstPostArgs = FindFirstPostArgs;
