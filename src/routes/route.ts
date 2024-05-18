import { Router } from "express";
import { createUser } from "../controller/User";
import {createSecurePoint} from "../controller/SecurePoint" 

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
});

// User
router.post("/user", createUser);

//SecurePoint
//router.get(//secure_point, func)

router.post("/secure_point",  createSecurePoint)


export default router;``