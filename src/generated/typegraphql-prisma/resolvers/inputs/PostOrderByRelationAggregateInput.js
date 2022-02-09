"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByRelationAggregateInput = void 0;
const TypeGraphQL = require("type-graphql");
const SortOrder_1 = require("../../enums/SortOrder");
let PostOrderByRelationAggregateInput = class PostOrderByRelationAggregateInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    })
], PostOrderByRelationAggregateInput.prototype, "_count", void 0);
PostOrderByRelationAggregateInput = __decorate([
    TypeGraphQL.InputType("PostOrderByRelationAggregateInput", {
        isAbstract: true
    })
], PostOrderByRelationAggregateInput);
exports.PostOrderByRelationAggregateInput = PostOrderByRelationAggregateInput;
