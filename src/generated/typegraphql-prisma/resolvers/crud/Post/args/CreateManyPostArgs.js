"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPostArgs = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateManyInput_1 = require("../../../inputs/PostCreateManyInput");
let CreateManyPostArgs = class CreateManyPostArgs {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyInput_1.PostCreateManyInput], {
        nullable: false
    })
], CreateManyPostArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
], CreateManyPostArgs.prototype, "skipDuplicates", void 0);
CreateManyPostArgs = __decorate([
    TypeGraphQL.ArgsType()
], CreateManyPostArgs);
exports.CreateManyPostArgs = CreateManyPostArgs;
