import React from 'react';
import Card from './Card';
import Button from './Button';
import CalendarDropdown from './CalendarDropdown';
import Slider from './Slider';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/colors';

const Banner = () => {
    return (
        <div style={{ backgroundColor: PRIMARY_COLOR, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: '20px' }}>
                <Card title="KPI 1" value="Value 1" />
                <Card title="KPI 2" value="Value 2" />
                <Card title="KPI 3" value="Value 3" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: '20px' }}>
                <Button label="Day" onClick={() => {}} />
                <Button label="Week" onClick={() => {}} />
                <Button label="Month" onClick={() => {}} />
            </div>
            <CalendarDropdown onDateSelect={() => {}} />
            <Slider onToggleChange={() => {}} />
            <CalendarDropdown onDateSelect={() => {}} />
        </div>
    );
};

export default Banner;