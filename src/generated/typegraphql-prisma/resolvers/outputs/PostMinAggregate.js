"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMinAggregate = void 0;
const TypeGraphQL = require("type-graphql");
let PostMinAggregate = class PostMinAggregate {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], PostMinAggregate.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    })
], PostMinAggregate.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], PostMinAggregate.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    })
], PostMinAggregate.prototype, "channelId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostMinAggregate.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
], PostMinAggregate.prototype, "updatedAt", void 0);
PostMinAggregate = __decorate([
    TypeGraphQL.ObjectType("PostMinAggregate", {
        isAbstract: true
    })
], PostMinAggregate);
exports.PostMinAggregate = PostMinAggregate;
