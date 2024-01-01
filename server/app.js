import { Config } from "./config/index.js";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import express from "express";
import cors from "cors";

const { ALLOWED_ORIGIN } = Config;
const app = express();

app.get("/health", (_, res) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    res.sendFile(join(__dirname, "index.html"));
});

app.use(
    cors({
        origin: ALLOWED_ORIGIN,
    })
);

export default app;
