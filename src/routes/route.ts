import { Router } from "express";
import { authController } from "../controller/Auth";
import { createUser, deleteUser, getUser, updateUser } from "../controller/User";
import { auth } from "../middleware/auth";
import { createShelter, updateShelter, deleteShelter, getUserShelter } from "../controller/Shelter";
import { createIncident, getIncident, getIncidentByUser, deleteIncidents, updateIncidents } from "../controller/Incident";
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
router.get("/shelter", auth, getUserShelter)
// router.put("/shelter", auth, updateShelter);
// router.delete("/shelter", auth, deleteShelter);
// router.get("/shelter", auth, getrShelter);

// Incidents
router.post("/incident", auth, createIncident);
router.put("/incident/:id", auth, updateIncidents);
router.delete("/incident/:id", auth, deleteIncidents);
router.get("/incident/:id", auth, getIncident);
router.get("/incidentByUser/:id", auth, getIncidentByUser);

// Auth
router.post("/login", authController);

export default router