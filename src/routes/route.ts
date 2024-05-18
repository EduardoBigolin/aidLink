import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controller/User";
import { authController } from "../controller/Auth";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
});

// User
router.post("/user", createUser);
router.put("/user/:id", auth, updateUser);
router.delete("/user/:id", auth, deleteUser);
router.get("/user/:id", auth, getUser);

// Auth
router.post("/login", authController);


export default router;