import { Router } from "express";
import { createUser } from "../controller/User";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
});

// User
router.post("/user", createUser);



export default router;