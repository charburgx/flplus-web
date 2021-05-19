import React, { ReactChild } from 'react';
import { Link } from 'react-router-dom';

type props = {
    href: string, 
    children?: any
}

/**
 * Component wrapper which chooses an external link for external links and a router link for internal links
 * 
 * @component
 */
const SmartLink = ({href, children}: props) => {
    const isExternal = (href.substring(0, 4) === "http");
    
    return ( isExternal ? 
        <React.Fragment>
            {/* Return children with href prop */}
            {
                React.Children.map(children, (child: any) => (
                    React.isValidElement(child) ? 
                        React.cloneElement(child, { href: href } as Partial<unknown>) 
                        : child
                    )
                )
            }
        </React.Fragment> : 
        <Link to={href}>{children}</Link>    
    )
}

export default SmartLink;