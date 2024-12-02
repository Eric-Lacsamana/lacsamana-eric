import Booking from '../models/Booking.js';
import Seminar from '../models/Seminar.js';
import sendEmail from '../utils/email.js';

const createBooking = async (req, res) => {
  try {
    const { seminarId } = req.body;

    const seminar = await Seminar.findById(seminarId);
    if (!seminar) return res.status(404).json({ message: 'Seminar not found' });
    if (seminar.slotsAvailable <= 0) return res.status(400).json({ message: 'Seminar is full' });

    const booking = await Booking.create({ user: req.user.id, seminar: seminarId });
    seminar.slotsAvailable -= 1;
    await seminar.save();

    const { firstName: attendeeName } = req.user;
    const { title, date: seminarDate, timeFrame, venue  } = seminar;

    const htmlContent = `
        <html>
        <body>
            <h1>Seminar Registration Confirmation</h1>
            <p>Dear ${attendeeName},</p>
            <p>Thanks for registering for <strong>${seminar.title}</strong>!</p>
            <p><strong>Event Details:</strong></p>
            <ul>
            <li>Date: ${seminarDate}</li>
            <li>Time: ${timeFrame.from} to ${timeFrame.to} </li>
            <li>Location: ${venue}</li>
            </ul>
            <p>If you have any questions, contact us at seminar@example.com.</p>
            <p>We look forward to seeing you there!</p>
        </body>
        </html>
    `;

    const plainTextContent = `
    Seminar Registration Confirmation

    Dear ${attendeeName},

    Thank you for registering for ${title}!

    Event Details:
    - Date: ${seminarDate}
    - Time:  ${timeFrame.from} to ${timeFrame.to} 
    - Location: ${venue}

    If you have any questions, contact us at seminar@example.com.

    We look forward to seeing you there!
  `;

    await sendEmail(req.user.email, 'Seminar Confirmation', plainTextContent, htmlContent)

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('seminar').populate('user', '-_id firstName lastName');;
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    // Validate paymentStatus
    if (!['pending', 'confirmed', 'rejected'].includes(paymentStatus)) {
      return res.status(400).json({ message: 'Invalid payment status' });
    }

    // Find and update booking
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { paymentStatus },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({
      message: 'Booking status updated successfully',
      booking: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking status', error });
  }
};

export { createBooking, getUserBookings, updateBookingStatus };