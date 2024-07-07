const express = require("express");
const { BookingController } = require("../../controllers/index");

const bookingController = new BookingController();

const router = express.Router();

router.post("/bookings", bookingController.create);
router.post("/publish", bookingController.sendMessageToQueue);
router.get('/info', (req, res) => {
    return res.json({
        message: "Response from bookings routes",
        success: true
    })
})
module.exports = router;
