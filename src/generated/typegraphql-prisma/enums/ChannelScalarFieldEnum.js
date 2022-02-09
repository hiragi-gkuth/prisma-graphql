"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var ChannelScalarFieldEnum;
(function (ChannelScalarFieldEnum) {
    ChannelScalarFieldEnum["id"] = "id";
    ChannelScalarFieldEnum["title"] = "title";
    ChannelScalarFieldEnum["description"] = "description";
})(ChannelScalarFieldEnum = exports.ChannelScalarFieldEnum || (exports.ChannelScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ChannelScalarFieldEnum, {
    name: "ChannelScalarFieldEnum",
    description: undefined,
});
