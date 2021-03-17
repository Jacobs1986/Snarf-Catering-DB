import React from "react";

// Styling
import "./Footer.css"

export default function Footer() {
    return (
        <div>
            <footer>
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Web Designs by Sean LLC 2021
            </footer>
        </div>
    );
};