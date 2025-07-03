import express from "express";
import { PrismaClient } from "./generated/prisma";

const app = express();
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
  try {
    const users = await prismaClient.user.findMany();
    res.json({ users });
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  try {
    await prismaClient.user.create({
      data: {
        firstname: Math.random().toString(),
        lastname: Math.random().toString(),
      },
    });
    res.json("posted user");
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000);
