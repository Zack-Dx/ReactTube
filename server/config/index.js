import { config } from "dotenv";
config();

const { PORT, ALLOWED_ORIGIN } = process.env;

export const Config = {
    PORT: String(PORT),
    ALLOWED_ORIGIN: String(ALLOWED_ORIGIN),
};
