"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("./generated/prisma");
const app = (0, express_1.default)();
const prismaClient = new prisma_1.PrismaClient();
app.get("/", async (req, res) => {
    try {
        const users = await prismaClient.user.findMany();
        res.json({ users });
    }
    catch (error) {
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
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(3000);
