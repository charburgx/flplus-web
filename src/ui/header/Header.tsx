import React from 'react'
import './Header.scss';
import { GHVersion, WIN_SOURCE, WIN_WIKI, WIN_ISSUES } from 'api/constants';
import VAlign from 'ui/VAlign';
import HeaderButton from './HeaderButton';
import HeaderLinks from './HeaderLinks';

const Header = ({ ver }: { ver: GHVersion }) => (
    <div className="header">
        <VAlign className="title-wrapper">
            <img src="/favicon.svg" alt="" draggable="false"/>

            <span className="title">
                FL Plus
            </span>

            {/* Show version info once its loaded */}
            { !ver.loading ? 
            <span className="version">
                {ver.tag_name}
            </span> : ""
            }
        </VAlign>

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
             { text: "FAQ", icon: "help", href: "/faq" },
             { text: "GitHub", icon: "code", href: "" },
             { text: "Suggestion", icon: "announcement", href: WIN_ISSUES }
        ]} />
    </div>
)

export default Header;