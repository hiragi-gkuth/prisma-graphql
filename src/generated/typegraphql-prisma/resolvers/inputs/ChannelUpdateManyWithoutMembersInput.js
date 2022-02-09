"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUpdateManyWithoutMembersInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateOrConnectWithoutMembersInput_1 = require("../inputs/ChannelCreateOrConnectWithoutMembersInput");
const ChannelCreateWithoutMembersInput_1 = require("../inputs/ChannelCreateWithoutMembersInput");
const ChannelScalarWhereInput_1 = require("../inputs/ChannelScalarWhereInput");
const ChannelUpdateManyWithWhereWithoutMembersInput_1 = require("../inputs/ChannelUpdateManyWithWhereWithoutMembersInput");
const ChannelUpdateWithWhereUniqueWithoutMembersInput_1 = require("../inputs/ChannelUpdateWithWhereUniqueWithoutMembersInput");
const ChannelUpsertWithWhereUniqueWithoutMembersInput_1 = require("../inputs/ChannelUpsertWithWhereUniqueWithoutMembersInput");
const ChannelWhereUniqueInput_1 = require("../inputs/ChannelWhereUniqueInput");
let ChannelUpdateManyWithoutMembersInput = class ChannelUpdateManyWithoutMembersInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ChannelCreateWithoutMembersInput_1.ChannelCreateWithoutMembersInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelCreateOrConnectWithoutMembersInput_1.ChannelCreateOrConnectWithoutMembersInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelUpsertWithWhereUniqueWithoutMembersInput_1.ChannelUpsertWithWhereUniqueWithoutMembersInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelWhereUniqueInput_1.ChannelWhereUniqueInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelWhereUniqueInput_1.ChannelWhereUniqueInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelWhereUniqueInput_1.ChannelWhereUniqueInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelWhereUniqueInput_1.ChannelWhereUniqueInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelUpdateWithWhereUniqueWithoutMembersInput_1.ChannelUpdateWithWhereUniqueWithoutMembersInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelUpdateManyWithWhereWithoutMembersInput_1.ChannelUpdateManyWithWhereWithoutMembersInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ChannelScalarWhereInput_1.ChannelScalarWhereInput], {
        nullable: true
    })
], ChannelUpdateManyWithoutMembersInput.prototype, "deleteMany", void 0);
ChannelUpdateManyWithoutMembersInput = __decorate([
    TypeGraphQL.InputType("ChannelUpdateManyWithoutMembersInput", {
        isAbstract: true
    })
], ChannelUpdateManyWithoutMembersInput);
exports.ChannelUpdateManyWithoutMembersInput = ChannelUpdateManyWithoutMembersInput;
