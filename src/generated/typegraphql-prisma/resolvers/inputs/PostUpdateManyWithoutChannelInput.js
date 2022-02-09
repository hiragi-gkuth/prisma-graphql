"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutChannelInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCreateManyChannelInputEnvelope_1 = require("../inputs/PostCreateManyChannelInputEnvelope");
const PostCreateOrConnectWithoutChannelInput_1 = require("../inputs/PostCreateOrConnectWithoutChannelInput");
const PostCreateWithoutChannelInput_1 = require("../inputs/PostCreateWithoutChannelInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutChannelInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutChannelInput");
const PostUpdateWithWhereUniqueWithoutChannelInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutChannelInput");
const PostUpsertWithWhereUniqueWithoutChannelInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutChannelInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutChannelInput = class PostUpdateManyWithoutChannelInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutChannelInput_1.PostCreateWithoutChannelInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutChannelInput_1.PostCreateOrConnectWithoutChannelInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutChannelInput_1.PostUpsertWithWhereUniqueWithoutChannelInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateManyChannelInputEnvelope_1.PostCreateManyChannelInputEnvelope, {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutChannelInput_1.PostUpdateWithWhereUniqueWithoutChannelInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutChannelInput_1.PostUpdateManyWithWhereWithoutChannelInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    })
], PostUpdateManyWithoutChannelInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutChannelInput = __decorate([
    TypeGraphQL.InputType("PostUpdateManyWithoutChannelInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutChannelInput);
exports.PostUpdateManyWithoutChannelInput = PostUpdateManyWithoutChannelInput;
