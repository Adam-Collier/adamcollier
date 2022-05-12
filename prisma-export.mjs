// taken from https://remix.run/docs/en/v1/tutorials/jokes#connect-to-the-database
import fs from "fs";
import pkg from '@prisma/client'
const { PrismaClient } = pkg;

let db

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient()
  db.$connect()
} else {
  if (!global.__db) {
    global.__db = new PrismaClient()
    global.__db.$connect()
  }
  db = global.__db
}

const post = await db.post.findMany();
const resource = await db.resource.findMany();
const resourceCollection = await db.resourceCollection.findMany()
const snippet = await db.snippet.findMany()
const snippetCollection = await db.snippetCollection.findMany()


fs.writeFileSync("./dump/post.js", JSON.stringify(post));
fs.writeFileSync("./dump/resource.js", JSON.stringify(resource));
fs.writeFileSync("./dump/resourceCollection.js", JSON.stringify(resourceCollection));
fs.writeFileSync("./dump/snippet.js", JSON.stringify(snippet));
fs.writeFileSync("./dump/snippetCollection.js", JSON.stringify(snippetCollection));

console.log("files have been written");
