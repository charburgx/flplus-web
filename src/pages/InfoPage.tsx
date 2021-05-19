import React, { Fragment } from 'react';
import './InfoPage.scss';
import NavBack from 'ui/nav/NavBack';

/**
 * Page info object, used to define a block of text with a title and content body
 */
export type Info = { 
    title?: string, 
    /**
     * Main content
     * 
     * Each array entry is a new line
     */
    content: (string | JSX.Element)[] 
};

type props = {
    /**
     * The page title, to be displayed at the top of page
     */
    page: string,
    /**
     * Page content, centered left
     */
    info: Info[]
}

/**
 * A page with blocks of information
 * 
 * Page content is centered left
 * 
 * @component
 */
const InfoPage = ({page, info}: props) => <Fragment>
    <div className="page-info container">
        <NavBack text={page} />

        <div className="row">
            <div className="col s12 m7 l6 xl5">
                {info.map(inf => <Fragment>
                    <span className="text-header">{inf.title}</span>
                    
                    {inf.content.map((c, i, {length}) => <Fragment>
                        <span className="text">{c}</span>
                        {!(length === i + 1) ? <br/> : <div className="block-end"></div>}
                    </Fragment>)}
                </Fragment>)}
            </div>
        </div>
    </div>
</Fragment>;

export default InfoPage;