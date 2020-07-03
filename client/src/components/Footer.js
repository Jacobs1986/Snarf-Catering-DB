import React from 'react';

function Footer() {
    return (
        <footer className="center">
           <span dangerouslySetInnerHTML={{ "__html": "&copy;"}} /> Snarf 2020
        </footer>
    );
};

export default Footer