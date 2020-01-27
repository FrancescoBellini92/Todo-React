import React from 'react';

export default function footerBtn ({color, action, text}) {
    return <button onClick={action} className={`btn ${color}`}>{text}</button>;
}