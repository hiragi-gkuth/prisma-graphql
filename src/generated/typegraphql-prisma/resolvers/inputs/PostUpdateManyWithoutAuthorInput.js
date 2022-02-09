"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateManyAuthorInputEnvelope_1 = require("../inputs/PostCreateManyAuthorInputEnvelope");
const PostCreateOrConnectWithoutAuthorInput_1 = require("../inputs/PostCreateOrConnectWithoutAuthorInput");
const PostCreateWithoutAuthorInput_1 = require("../inputs/PostCreateWithoutAuthorInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutAuthorInput");
const PostUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutAuthorInput");
const PostUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutAuthorInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutAuthorInput = class PostUpdateManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutAuthorInput_1.PostCreateWithoutAuthorInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutAuthorInput_1.PostCreateOrConnectWithoutAuthorInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutAuthorInput_1.PostUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateManyAuthorInputEnvelope_1.PostCreateManyAuthorInputEnvelope, {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutAuthorInput_1.PostUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutAuthorInput_1.PostUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    })
], PostUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("PostUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutAuthorInput);
exports.PostUpdateManyWithoutAuthorInput = PostUpdateManyWithoutAuthorInput;
