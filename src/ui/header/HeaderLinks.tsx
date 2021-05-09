import React from 'react';

type Entry = {
    text: string,
    href: string,
    icon?: string
}

const HeaderLinks = ({entries}: {entries: Entry[]}) => (
    <div className="links">
        {entries.map((ent, i, { length }) => (
            <React.Fragment>
                <a href={ent.href} className="waves-effect waves-yellow btn-small btn-clear">
                    {ent.icon ? <i className="material-icons left">{ent.icon}</i> : ""}
                    <span>{ent.text}</span>
                </a>
                {!(length == i+1) ? <div className="sep"></div> : ""}
            </React.Fragment>
        ))}
    </div>
)

export default HeaderLinks;