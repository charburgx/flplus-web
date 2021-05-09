import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import VAlign from 'ui/VAlign';

const NavBack = ({text}: {text: string}) => 
(<Fragment>
    <VAlign className="nav back">
        <Link to="/">
            <a className="waves-effect waves-light btn-small btn-clear">
                <i className="material-icons left">arrow_back</i>
                Back
            </a>
        </Link>
        <div className="sep"></div>
        <span className="text-small" style={{marginLeft: "16px"}}>{text}</span>
    </VAlign>
</Fragment>);

export default NavBack;