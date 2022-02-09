"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCount_1 = require("../resolvers/outputs/ChannelCount");
let Channel = class Channel {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    })
], Channel.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    })
], Channel.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    })
], Channel.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelCount_1.ChannelCount, {
        nullable: true
    })
], Channel.prototype, "_count", void 0);
Channel = __decorate([
    TypeGraphQL.ObjectType("Channel", {
        isAbstract: true
    })
], Channel);
exports.Channel = Channel;
