import React, { Fragment } from 'react';
import './InfoPage.scss';
import NavBack from 'ui/nav/NavBack';

export type Info = { title?: string, content: (string | JSX.Element)[] };

const InfoPage = ({page, info}: {page: string, info: Info[]}) => <Fragment>
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