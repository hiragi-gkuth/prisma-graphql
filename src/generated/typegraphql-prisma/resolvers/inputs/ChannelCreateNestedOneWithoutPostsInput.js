"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelCreateNestedOneWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateOrConnectWithoutPostsInput_1 = require("../inputs/ChannelCreateOrConnectWithoutPostsInput");
const ChannelCreateWithoutPostsInput_1 = require("../inputs/ChannelCreateWithoutPostsInput");
const ChannelWhereUniqueInput_1 = require("../inputs/ChannelWhereUniqueInput");
let ChannelCreateNestedOneWithoutPostsInput = class ChannelCreateNestedOneWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateWithoutPostsInput_1.ChannelCreateWithoutPostsInput, {
        nullable: true
    })
], ChannelCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateOrConnectWithoutPostsInput_1.ChannelCreateOrConnectWithoutPostsInput, {
        nullable: true
    })
], ChannelCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelWhereUniqueInput_1.ChannelWhereUniqueInput, {
        nullable: true
    })
], ChannelCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
ChannelCreateNestedOneWithoutPostsInput = __decorate([
    TypeGraphQL.InputType("ChannelCreateNestedOneWithoutPostsInput", {
        isAbstract: true
    })
], ChannelCreateNestedOneWithoutPostsInput);
exports.ChannelCreateNestedOneWithoutPostsInput = ChannelCreateNestedOneWithoutPostsInput;
