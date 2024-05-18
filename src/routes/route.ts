import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controller/User";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
});

// User
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:id", getUser);


export default router;