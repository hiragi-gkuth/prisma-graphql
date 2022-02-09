import "reflect-metadata";

import Koa from "koa";
import Router from "@koa/router";

import { graphqlHTTP } from "koa-graphql";
import { schema } from "./scheme";
import { prisma } from "./context";


const app = new Koa();
const router = new Router();

router.all(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    context: {prisma},
    graphiql: true,
  })
);

app.use(router.routes()).use(router.allowedMethods());
app.listen(9000);

console.log("http://localhost:9000/graphql");
