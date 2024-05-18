import { Router } from "express";
import { createUser, updateUser } from "../controller/User";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
});

// User
router.post("/user", createUser);
router.put("/user/:id", updateUser);



export default router;