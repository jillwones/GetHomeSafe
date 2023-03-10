const express = require("express");

// controller functions

const { loginUser, signupUser, emergencyContact, getEmergencyContacts, getSearchResults, addNotification, deleteNotification, getNotifications, updateUser, deleteUser, getUser, updateWalkingSpeed} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// deleteUser route
router.delete("/:id", deleteUser);

// getUser route
router.get("/:id", getUser);

// add / delete emergency contact route
router.patch("/contact", emergencyContact);
// get emergency contacts route
router.get("/contacts/:id", getEmergencyContacts)

router.get("/contacts/search/:query", getSearchResults)

// create a new notification
router.post("/notifications/:receiver_id/add", addNotification)

// delete a notification
router.delete("/notifications/:user_id/:notification_index/delete", deleteNotification)

// get notifications for logged in user
router.get("/notifications/:user_id", getNotifications)

// update walking speed
router.patch("/walkingSpeed/:id", updateWalkingSpeed)

// findUser route
router.patch("/:id", updateUser);

module.exports = router;
