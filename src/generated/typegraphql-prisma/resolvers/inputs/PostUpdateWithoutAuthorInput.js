"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const ChannelUpdateOneRequiredWithoutPostsInput_1 = require("../inputs/ChannelUpdateOneRequiredWithoutPostsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PostUpdateWithoutAuthorInput = class PostUpdateWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    })
], PostUpdateWithoutAuthorInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
], PostUpdateWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
], PostUpdateWithoutAuthorInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ChannelUpdateOneRequiredWithoutPostsInput_1.ChannelUpdateOneRequiredWithoutPostsInput, {
        nullable: true
    })
], PostUpdateWithoutAuthorInput.prototype, "channel", void 0);
PostUpdateWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("PostUpdateWithoutAuthorInput", {
        isAbstract: true
    })
], PostUpdateWithoutAuthorInput);
exports.PostUpdateWithoutAuthorInput = PostUpdateWithoutAuthorInput;
