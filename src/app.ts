import Express, { NextFunction } from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import passport from "passport";

import indexRoutes from '../src/routes/index.routes'
import orderRoutes from "../src/routes/order.routes";
import authRoutes from "../src/routes/auth.routes";
import routesItem from "../src/routes/item.routes";
import dashRoutes from "./routes/dashboard.routes";
import paymentRoutes from '../src/routes/payment.routes'
import { URI } from "./config";

 import "./middlewares/google.middleware";
// import "./middlewares/discord.middleware";
// import './middlewares/microsoft.middleware'
//import './middlewares/microsoft.middleware'
const app = Express();

//config
app.set("view engine ", "ejs");
app.set("views", path.join(__dirname + "/views"));
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json())


//Middlewares
app.use(
  session({
    cookie: {
      
      secure: false,
      maxAge: 6000 * 60 *24 ,
    },
    name: 'vitico',
    secret: "some bode",
    saveUninitialized: false,
    resave: false,
    
    store: MongoStore.create({mongoUrl : URI})
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"));
app.use(cors());

app.use((req, res, next: NextFunction)=>{
app.locals.user = req.user
next()
})

//routes
app.use(indexRoutes)
app.use("/auth", authRoutes);
app.use(dashRoutes);
app.use(routesItem);
app.use(orderRoutes);
app.use(paymentRoutes)


export default app;
