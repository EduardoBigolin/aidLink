import { Router } from "express";
import { authController } from "../controller/Auth";
import { createSecurePoint } from "../controller/SecurePoint";
import { createUser, deleteUser, getUser, updateUser } from "../controller/User";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
});

// User
router.post("/user", createUser);
router.put("/user", auth, updateUser);
router.delete("/user", auth, deleteUser);
router.get("/user", auth, getUser);

router.post("/secure_point", createSecurePoint)
// Auth
router.post("/login", authController);

export default router