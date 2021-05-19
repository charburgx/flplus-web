import React from 'react';

/**
 * Aligns content vertically
 */
const VAlign = (props: any) => (
    <div {...props} className={`valign-wrapper ${props.className}`}>
        {props.children}
    </div>
);

export default VAlign;