import { Router } from "express";
import { authController } from "../controller/Auth";
import { createUser, deleteUser, getUser, updateUser } from "../controller/User";
import { auth } from "../middleware/auth";
import { createShelter, updateShelter, deleteShelter } from "../controller/Shelter";
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
});

// User
router.post("/user", createUser);
router.put("/user", auth, updateUser);
router.delete("/user", auth, deleteUser);
router.get("/user", auth, getUser);

// Shelter
router.post("/shelter",auth, createShelter);
router.put("/shelter", auth, updateShelter);
router.delete("/shelter", auth, deleteShelter)
// router.put("/shelter", auth, updateShelter);
// router.delete("/shelter", auth, deleteShelter);
// router.get("/shelter", auth, getrShelter);


// Auth
router.post("/login", authController);

export default router