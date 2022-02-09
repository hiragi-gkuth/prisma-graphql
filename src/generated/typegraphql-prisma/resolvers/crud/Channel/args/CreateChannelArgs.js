"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChannelArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateInput_1 = require("../../../inputs/ChannelCreateInput");
let CreateChannelArgs = class CreateChannelArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ChannelCreateInput_1.ChannelCreateInput, {
        nullable: false
    })
], CreateChannelArgs.prototype, "data", void 0);
CreateChannelArgs = __decorate([
    TypeGraphQL.ArgsType()
], CreateChannelArgs);
exports.CreateChannelArgs = CreateChannelArgs;
