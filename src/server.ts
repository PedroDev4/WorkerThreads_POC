import "reflect-metadata";
import express from "express";
import "./database";
import { ExecuteHugeMathUseCase } from "./service/ExecuteHugeMathUseCase";

const executeHuheMathUseCase = new ExecuteHugeMathUseCase();
executeHuheMathUseCase.execute().then(result => console.log(result));

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running!");
});