import React from 'react';

// aligns content vertically
const VAlign = (props: any) => (
    <div {...props} className={`valign-wrapper ${props.className}`}>
        {props.children}
    </div>
);

export default VAlign;