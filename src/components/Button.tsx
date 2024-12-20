import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#f39700', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            {label}
        </button>
    );
};

export default Button;