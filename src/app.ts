import Express from "express";
import session from "express-session";
import cors from "cors";
import path from "path";
import orderRoutes from "../src/routes/order.routes";
import authRoutes from "../src/routes/auth.routes";
import routesItem from "../src/routes/item.routes";
import dashRoutes from "./routes/dashboard.routes";
import morgan from "morgan";
import passport from "passport";
import "./middlewares/google.middleware";
import "./middlewares/discord.middleware";
import './middlewares/microsoft.middleware'
//import './middlewares/microsoft.middleware'
const app = Express();

//config
app.set("view engine ", "ejs");
app.set("views", path.join(__dirname + "/views"));
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


//Middlewares
app.use(
  session({
    cookie: {
      secure: true,
      maxAge: 6000,
    },
    secret: "some bode",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
//app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/auth", authRoutes);
app.use(dashRoutes);
app.use(routesItem);
app.use(orderRoutes);

export default app;
