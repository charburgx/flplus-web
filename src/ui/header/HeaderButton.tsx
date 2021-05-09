import React from 'react';

const HeaderButton = ({href, pos, icon, children}: {href: string, pos: string, icon?: string, children?: any}) => (
<a href={href} className={`waves-effect btn dl-btn-${pos}`}>
    {icon ?
    <i className={`material-icons ${pos}`}>{icon}</i>
    : ""}
    {children}
</a>)

export default HeaderButton;