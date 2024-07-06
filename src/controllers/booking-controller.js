const { BookingService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
const bookingService = new BookingService();

const { REMINDER_BINDING_KEY } = require("../config/serverConfig");
const { createChannel, publishMessage } = require("../utils/messageQueue");

class BookingController {
  constructor() {}
  async sendMessageToQueue(req, res) {
    const channel = await createChannel();
    const data = { message: "Success" };
    publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(data));
    return res.status(StatusCodes.OK).json({
      message: "Successfully published the event",
      success: true,
      err: {},
    });
  }
  async create(req, res) {
    try {
      const response = await bookingService.createBooking(req.body);
      console.log("From booking controller: " + response);
      return res.status(StatusCodes.OK).json({
        message: "Booking created successfully",
        data: response,
        success: true,
        err: {},
      });
    } catch (error) {
      return res.status(error.statusCode).json({
        data: {},
        success: false,
        message: error.message,
        err: error.explanation,
      });
    }
  }
}

module.exports = BookingController;
