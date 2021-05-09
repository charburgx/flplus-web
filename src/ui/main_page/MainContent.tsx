import React from 'react';
import './MainContent.scss';

// Content
type contentDict = { title: string, content: string[], image?: string }

const content: [contentDict, contentDict, contentDict, contentDict] = [
    { 
        title: "Backup Toolbar & Settings", 
        content: [
            "Have a custom toolbar? Easily sync it across multiple devices."
        ],
        image: "/panel1_2.png"
    },
    {
        title: "Rapidly Swap Colors",
        content: [
            "Simply press C and the desired color to quickly switch between colors while editing in the Piano Roll."
        ],
        image: "/panel2.png"
    },
    {
        title: "Multiple Custom Workspaces",
        content: [
            "Say goodbye to wrangling windows for hours."
        ]
    },
    {
        title: "Pencil Tool Bound to Z",
        content: [
            "No longer reach your hand across the keyboard to swap to the pencil tool."
        ],
        image: "/panel4.png"
    }
]

// inner and outer column sizes
const oCS = 's12 m6';
const iCS = ['s6 m6 l4', 's6 m6 l8'];

// inner and outer columns
const OuterColumn = ({children}: {children: any}) => (
    <div className={`col ${oCS} outer`}>
        {children}
    </div>
);

const InnerColumn = ({children}: {children: any[]}) => (
    <div className="row inner">
        <div className={`col ${iCS[0]}`}>
            {children && children.length > 0 ? children[0] : ""}
        </div>
        <div className={`col ${iCS[1]}`}>
            {children && children.length > 1 ? children[1] : ""}
        </div>
    </div>
);

const Entry = ({i}: {i: number}) => (
    <OuterColumn>
        <InnerColumn>
            <img src={content[i].image} id={`img${i}`} alt="" draggable="false"/>

            <div className="text">
                <span className="text-header">{content[i].title}</span>

                {content[i].content.map((ent, j, {length}) => 
                    <React.Fragment>
                        <span>{ent}</span> 
                        {(j+1 === length) ? "" : <br/>}
                    </React.Fragment>
                )}
            </div>
        </InnerColumn>
    </OuterColumn>
);

const MainContent = () => 
(<div className="main-content container">
    <div className="row outer">
        {[0, 1].map(i => <Entry i={i} />)}
    </div>
    <div className="row outer">
        {[2, 3].map(i => <Entry i={i} />)}
    </div>

    <div className="and-more">
        <span className="text-header">And more!</span>
    </div>
</div>);

export default MainContent;