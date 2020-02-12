import React from 'react';
import PropTypes from 'prop-types';

export default function footerBtn ({color, action, text}) {
    return <button onClick={action} className={`btn ${color}`}>{text}</button>;
}

footerBtn.prototypes = {
    color: PropTypes.string,
    action: PropTypes.func,
    text: PropTypes.string
}