import Express from "express";
import cors from "cors";
import orderRoutes from '../src/routes/order.routes'
import authRoutes from '../src/routes/auth.routes'
import routesItem from "../src/routes/item.routes";
import morgan from "morgan";
const app = Express();

//config
app.use(cors());
app.use(morgan('dev'))
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

//routes
app.use(routesItem);
app.use(authRoutes);
app.use(orderRoutes);

export default app; 
