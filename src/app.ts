import * as express from "express";
import * as path from "path";

// Routes
import { index } from "./routes/index";

// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);
