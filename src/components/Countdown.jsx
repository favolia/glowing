import React, { useState, useEffect } from 'react';

export const Countdown = ({ endDate }) => {
    const [countdown, setCountdown] = useState('0 : 00 : 00 : 00');

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = endDate - currentDate;

            if (timeDifference < 0) {
                clearInterval(interval);
                setCountdown('0 : 00 : 00 : 00');
            } else {
                let remainingTime = timeDifference;

                const daysRemaining = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                remainingTime -= daysRemaining * (1000 * 60 * 60 * 24);

                const hoursRemaining = Math.floor(remainingTime / (1000 * 60 * 60));
                remainingTime -= hoursRemaining * (1000 * 60 * 60);

                const minutesRemaining = Math.floor(remainingTime / (1000 * 60));
                remainingTime -= minutesRemaining * (1000 * 60);

                const secondsRemaining = Math.floor(remainingTime / 1000);

                const formattedDays = formatTime(daysRemaining);
                const formattedHours = formatTime(hoursRemaining);
                const formattedMinutes = formatTime(minutesRemaining);
                const formattedSeconds = formatTime(secondsRemaining);

                const countdownString = `${formattedDays} : ${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
                setCountdown(countdownString);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    return (
        <div className="text-4xl md:text-5xl font-medium text-default-300">
            {countdown}
        </div>
    );
};

export default Countdown;
