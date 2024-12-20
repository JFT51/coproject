import React, { useState } from 'react';
import Banner from './components/Banner';
import Button from './components/Button';
import CalendarDropdown from './components/CalendarDropdown';
import Slider from './components/Slider';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './styles/colors';

const App: React.FC = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Day');
    const [benchmarkActive, setBenchmarkActive] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [benchmarkDate, setBenchmarkDate] = useState(new Date());

    const handlePeriodChange = (period: string) => {
        setSelectedPeriod(period);
    };

    const handleToggleBenchmark = (isActive: boolean) => {
        setBenchmarkActive(isActive);
    };

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
    };

    const handleBenchmarkDateChange = (date: Date) => {
        setBenchmarkDate(date);
    };

    return (
        <div style={{ backgroundColor: PRIMARY_COLOR, color: '#fff', padding: '20px' }}>
            <Banner />
            <div>
                <Button label="Day" onClick={() => handlePeriodChange('Day')} />
                <Button label="Week" onClick={() => handlePeriodChange('Week')} />
                <Button label="Month" onClick={() => handlePeriodChange('Month')} />
            </div>
            <CalendarDropdown selectedDate={selectedDate} onDateChange={handleDateChange} />
            <Slider isActive={benchmarkActive} onToggle={handleToggleBenchmark} />
            {benchmarkActive && (
                <CalendarDropdown selectedDate={benchmarkDate} onDateChange={handleBenchmarkDateChange} />
            )}
        </div>
    );
};

export default App;