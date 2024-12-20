import React from 'react';

interface CalendarDropdownProps {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
}

const CalendarDropdown: React.FC<CalendarDropdownProps> = ({ selectedDate, onDateChange }) => {
    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newDate = new Date(event.target.value);
        onDateChange(newDate);
    };

    return (
        <div>
            <label htmlFor="calendar-dropdown">Select Date:</label>
            <select id="calendar-dropdown" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange}>
                <option value={new Date().toISOString().split('T')[0]}>Today</option>
                <option value={new Date(Date.now() - 86400000).toISOString().split('T')[0]}>Yesterday</option>
                <option value={new Date(Date.now() - 604800000).toISOString().split('T')[0]}>Last Week</option>
                <option value={new Date(Date.now() - 2592000000).toISOString().split('T')[0]}>Last Month</option>
            </select>
        </div>
    );
};

export default CalendarDropdown;