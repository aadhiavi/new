import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';
import Img from '../../Assets/image-1.gif';

const isDateBlocked = (date, blockedDates) => {
    return blockedDates.some(({ start, end }) => date >= start && date <= end);
};

const Booking = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [bookingMessage, setBookingMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [blockedDates, setBlockedDates] = useState([
        { start: new Date('2024-08-25'), end: new Date('2024-08-28') },
        { start: new Date('2024-09-05'), end: new Date('2024-09-08') },
    ]);
    const [place, setPlace] = useState('');
    const [showOverlay, setShowOverlay] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleBooking = () => {
        if (!startDate || !endDate || !place) {
            setErrorMessage('Please select all required fields.');
            setIsError(true);
            setShowOverlay(true);
            return;
        }

        if (endDate < startDate) {
            setErrorMessage('End date cannot be before the start date.');
            setIsError(true);
            setShowOverlay(true);
            return;
        }

        setBlockedDates([
            ...blockedDates,
            { start: startDate, end: endDate }
        ]);

        setBookingMessage(`
            Booking Confirmation:
            - Start Date: ${startDate.toLocaleDateString()}
            - End Date: ${endDate.toLocaleDateString()}
            - Place: ${place}
            Please select new dates for another booking.
        `);
        setStartDate(null);
        setEndDate(null);
        setPlace('');
        setIsError(false);
        setShowOverlay(true);
    };

    const getDayClassName = date => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (date < today) {
            return 'past-date';
        } else if (isDateBlocked(date, blockedDates)) {
            return 'blocked-date';
        }
        return 'available-date';
    };

    const closeOverlay = () => {
        setShowOverlay(false);
    };

    return (
        <div className="booking-form">
            <div>
                <DatePicker
                    id="start-date"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    dayClassName={date => getDayClassName(date)}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="Select start date"
                />
            </div>
            <div>
                <DatePicker
                    id="end-date"
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate ? startDate : new Date()}
                    dayClassName={date => getDayClassName(date)}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="Select end date"
                />
            </div>
            <div>
                <select
                    id="place"
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                >
                    <option value="" disabled>Select Place</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Guntur">Guntur</option>
                    <option value="Bangalore">Bangalore</option>
                </select>
            </div>
            <button onClick={handleBooking} className="book-now-button">
                Book Now!
            </button>

            {showOverlay && (
                <div className="overlay">
                    <div className="overlay-content">
                        {isError ? <h2>Error</h2> : <h3>Confirmation</h3>}
                        <ul>
                            {isError ? (
                                <li className='error'>{errorMessage}</li>
                            ) : (
                                <>
                                    <img src={Img} alt="Success" className="success-image" />
                                    {bookingMessage.split('\n').map((line, index) => (
                                        <li key={index}>{line}</li>
                                    ))}
                                </>
                            )}
                        </ul>
                        <button onClick={closeOverlay} className="close-overlay-button">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Booking;











