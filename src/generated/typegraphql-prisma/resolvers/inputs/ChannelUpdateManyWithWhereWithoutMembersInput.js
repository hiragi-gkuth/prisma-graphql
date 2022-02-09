"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUpdateManyWithWhereWithoutMembersInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelScalarWhereInput_1 = require("../inputs/ChannelScalarWhereInput");
const ChannelUpdateManyMutationInput_1 = require("../inputs/ChannelUpdateManyMutationInput");
let ChannelUpdateManyWithWhereWithoutMembersInput = class ChannelUpdateManyWithWhereWithoutMembersInput {
};
__decorate([
    TypeGraphQL.Field(_type => ChannelScalarWhereInput_1.ChannelScalarWhereInput, {
        nullable: false
    })
], ChannelUpdateManyWithWhereWithoutMembersInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelUpdateManyMutationInput_1.ChannelUpdateManyMutationInput, {
        nullable: false
    })
], ChannelUpdateManyWithWhereWithoutMembersInput.prototype, "data", void 0);
ChannelUpdateManyWithWhereWithoutMembersInput = __decorate([
    TypeGraphQL.InputType("ChannelUpdateManyWithWhereWithoutMembersInput", {
        isAbstract: true
    })
], ChannelUpdateManyWithWhereWithoutMembersInput);
exports.ChannelUpdateManyWithWhereWithoutMembersInput = ChannelUpdateManyWithWhereWithoutMembersInput;
