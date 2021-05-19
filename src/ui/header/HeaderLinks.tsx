import React from 'react';
import { Link } from 'react-router-dom';
import SmartLink from 'ui/SmartLink';

type Entry = {
    text: string,
    href: string,
    icon?: string
}

const HeaderLinks = ({entries}: {entries: Entry[]}) => (
    <div className="links">
        {entries.map((ent, i, { length }) => (
            <React.Fragment>
                <SmartLink href={ent.href}>
                    <a className="waves-effect waves-light btn-small btn-clear">
                        {ent.icon ? <i className="material-icons left">{ent.icon}</i> : ""}
                        <span>{ent.text}</span>
                    </a>
                </SmartLink>

                {!(length === i+1) ? <div className="sep"></div> : ""}
            </React.Fragment>
        ))}
    </div>
)

export default HeaderLinks;