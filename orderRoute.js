import expess from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder } from "../controllers/orderController.js"

const orderRrouter = expess.Router();

orderRrouter.post("/place",authMiddleware,placeOrder);

export default orderRrouter;
