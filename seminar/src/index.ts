import express from "express";
import cors, { CorsOptions } from "cors";

const app = express();
const port = 8080;

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
} satisfies CorsOptions;

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/status", (req, res) => {
  res.json({ isOnline: true });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
