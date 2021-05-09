import React, { ReactChild } from 'react';
import { Link } from 'react-router-dom';

const SmartLink = ({href, children}: {href: string, children?: any}) => {
    const isExternal = (href.substring(0, 4) === "http");
    
    return ( isExternal ? 
        <React.Fragment>
            {/* Return children with href prop */}
            {React.Children.map(children, (child: any) => (React.isValidElement(child) ? React.cloneElement(child, { href: href } as Partial<unknown>) : child))}
        </React.Fragment> : 
        <Link to={href}>{children}</Link>    
    )
}

export default SmartLink;