import { Router } from "express";
<<<<<<< HEAD
import { createUser } from "../controller/User";
import {createSecurePoint} from "../controller/SecurePoint" 
=======
import { createUser, deleteUser, getUser, updateUser } from "../controller/User";
import { authController } from "../controller/Auth";
import { auth } from "../middleware/auth";
>>>>>>> 0f01f002c54d22bbb02269d886db69c33c00be55

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
});

// User
router.post("/user", createUser);
router.put("/user", auth, updateUser);
router.delete("/user", auth, deleteUser);
router.get("/user", auth, getUser);

<<<<<<< HEAD
//SecurePoint
//router.get(//secure_point, func)

router.post("/secure_point",  createSecurePoint)
=======
// Auth
router.post("/login", authController);
>>>>>>> 0f01f002c54d22bbb02269d886db69c33c00be55


export default router;``