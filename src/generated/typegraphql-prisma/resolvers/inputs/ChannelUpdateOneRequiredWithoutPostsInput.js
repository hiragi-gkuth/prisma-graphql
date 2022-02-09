"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUpdateOneRequiredWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateOrConnectWithoutPostsInput_1 = require("../inputs/ChannelCreateOrConnectWithoutPostsInput");
const ChannelCreateWithoutPostsInput_1 = require("../inputs/ChannelCreateWithoutPostsInput");
const ChannelUpdateWithoutPostsInput_1 = require("../inputs/ChannelUpdateWithoutPostsInput");
const ChannelUpsertWithoutPostsInput_1 = require("../inputs/ChannelUpsertWithoutPostsInput");
const ChannelWhereUniqueInput_1 = require("../inputs/ChannelWhereUniqueInput");
let ChannelUpdateOneRequiredWithoutPostsInput = class ChannelUpdateOneRequiredWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateWithoutPostsInput_1.ChannelCreateWithoutPostsInput, {
        nullable: true
    })
], ChannelUpdateOneRequiredWithoutPostsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateOrConnectWithoutPostsInput_1.ChannelCreateOrConnectWithoutPostsInput, {
        nullable: true
    })
], ChannelUpdateOneRequiredWithoutPostsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelUpsertWithoutPostsInput_1.ChannelUpsertWithoutPostsInput, {
        nullable: true
    })
], ChannelUpdateOneRequiredWithoutPostsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelWhereUniqueInput_1.ChannelWhereUniqueInput, {
        nullable: true
    })
], ChannelUpdateOneRequiredWithoutPostsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelUpdateWithoutPostsInput_1.ChannelUpdateWithoutPostsInput, {
        nullable: true
    })
], ChannelUpdateOneRequiredWithoutPostsInput.prototype, "update", void 0);
ChannelUpdateOneRequiredWithoutPostsInput = __decorate([
    TypeGraphQL.InputType("ChannelUpdateOneRequiredWithoutPostsInput", {
        isAbstract: true
    })
], ChannelUpdateOneRequiredWithoutPostsInput);
exports.ChannelUpdateOneRequiredWithoutPostsInput = ChannelUpdateOneRequiredWithoutPostsInput;
