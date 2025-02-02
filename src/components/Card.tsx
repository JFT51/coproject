import React from 'react';

interface CardProps {
    title: string;
    value: string | number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default Card;