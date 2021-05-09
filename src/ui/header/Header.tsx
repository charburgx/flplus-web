import React from 'react'
import './Header.scss';
import { GHVersion, WIN_SOURCE, WIN_WIKI, WIN_ISSUES } from 'api/constants';
import HeaderButton from './HeaderButton';
import HeaderLinks from './HeaderLinks';

const Header = ({ ver }: { ver: GHVersion }) => (
    <div className="header">
        <div className="valign-wrapper flex-center">
            <img src="/logo.svg" alt=""/>
            <span className="title">
                FL Plus
            </span>

            {/* Show version info once its loaded */}
            { !ver.loading ? 
            <span className="version">
                {ver.name}
            </span> : ""
            }
        </div>
        <span className="subtitle">
            Boost workflow productivity in FL Studio
        </span>

        <HeaderButton href={ver.html_url} pos="left" icon="download" >
            Download
        </HeaderButton>

        <HeaderButton href={WIN_SOURCE} pos="right" icon="code" >
            Source
        </HeaderButton>

        <HeaderLinks entries={[
             { text: "Documentation", icon: "book", href: WIN_WIKI },
             { text: "FAQ", icon: "help", href: "" },
             { text: "GitHub", icon: "code", href: "" },
             { text: "Suggestion", icon: "announcement", href: WIN_ISSUES }
        ]} />
    </div>
)

export default Header;