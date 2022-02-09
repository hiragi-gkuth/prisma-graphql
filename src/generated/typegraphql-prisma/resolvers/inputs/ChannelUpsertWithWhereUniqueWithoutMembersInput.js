"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUpsertWithWhereUniqueWithoutMembersInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateWithoutMembersInput_1 = require("../inputs/ChannelCreateWithoutMembersInput");
const ChannelUpdateWithoutMembersInput_1 = require("../inputs/ChannelUpdateWithoutMembersInput");
const ChannelWhereUniqueInput_1 = require("../inputs/ChannelWhereUniqueInput");
let ChannelUpsertWithWhereUniqueWithoutMembersInput = class ChannelUpsertWithWhereUniqueWithoutMembersInput {
};
__decorate([
    TypeGraphQL.Field(_type => ChannelWhereUniqueInput_1.ChannelWhereUniqueInput, {
        nullable: false
    })
], ChannelUpsertWithWhereUniqueWithoutMembersInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelUpdateWithoutMembersInput_1.ChannelUpdateWithoutMembersInput, {
        nullable: false
    })
], ChannelUpsertWithWhereUniqueWithoutMembersInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateWithoutMembersInput_1.ChannelCreateWithoutMembersInput, {
        nullable: false
    })
], ChannelUpsertWithWhereUniqueWithoutMembersInput.prototype, "create", void 0);
ChannelUpsertWithWhereUniqueWithoutMembersInput = __decorate([
    TypeGraphQL.InputType("ChannelUpsertWithWhereUniqueWithoutMembersInput", {
        isAbstract: true
    })
], ChannelUpsertWithWhereUniqueWithoutMembersInput);
exports.ChannelUpsertWithWhereUniqueWithoutMembersInput = ChannelUpsertWithWhereUniqueWithoutMembersInput;
