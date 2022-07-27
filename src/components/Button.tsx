import React, { useState } from 'react';
import { useTheme } from '@emotion/react'

interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
}

const Button: React.FC<Props> = ({
    border,
    color,
    children,
    height,
    onClick,
    radius,
    width
}) => {

    const theme = useTheme()
    color = theme.color.buttonPrimaryBkgDefault

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width
            }}
        >
            {children}
        </button>
    );
}

export default Button;