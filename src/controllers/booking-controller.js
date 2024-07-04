const { BookingService } = require("../services/index");
const bookingService = new BookingService();
const { StatusCodes } = require("http-status-codes");
const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    console.log("From booking controller: " + response)
    return res.status(StatusCodes.OK).json({
      message: "Booking created successfully",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log("From booking controller: " + error)
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

module.exports = {
  create,
};
