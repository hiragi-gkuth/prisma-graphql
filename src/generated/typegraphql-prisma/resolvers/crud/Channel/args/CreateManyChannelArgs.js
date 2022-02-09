"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyChannelArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelCreateManyInput_1 = require("../../../inputs/ChannelCreateManyInput");
let CreateManyChannelArgs = class CreateManyChannelArgs {
};
__decorate([
    TypeGraphQL.Field(_type => [ChannelCreateManyInput_1.ChannelCreateManyInput], {
        nullable: false
    })
], CreateManyChannelArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
], CreateManyChannelArgs.prototype, "skipDuplicates", void 0);
CreateManyChannelArgs = __decorate([
    TypeGraphQL.ArgsType()
], CreateManyChannelArgs);
exports.CreateManyChannelArgs = CreateManyChannelArgs;
