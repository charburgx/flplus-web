/**
 * Main content, intended for use in landing page to display the main features of FL Plus
 */

import React from 'react';
import './MainContent.scss';

/**
 * Data type for content block
 */
type contentDict = { 
    title: string, 
    content: string[], 
    image?: string 
}

const content: [contentDict, contentDict, contentDict, contentDict] = [
    { 
        title: "Quick Create Automation Clip", 
        content: [
            "Simply press CTRL+SHIFT+A to create an automation clip on the most recently tweaked parameter."
        ],
        image: "/panel_1_3_3.png"
    },
    {
        title: "Rapidly Swap Colors",
        content: [
            "Simply press X and the desired color to quickly switch between colors while editing in the Piano Roll."
        ],
        image: "/panel2.png"
    },
    {
        title: "Multiple Custom Workspaces",
        content: [
            "Say goodbye to wrangling windows."
        ],
        image: "/panel3.png"
    },
    {
        title: "Automatically Disable Reach Playback",
        content: [
            "No longer experience Edison randomly jumping to the start of playback."
        ],
        image: "/panel4_2.png"
    }
]

// outer column size
const oCS = 's12 m6';

// inner column sizes (for image and text)
const iCS = ['s6 m6 l4', 's6 m6 l8'];

/**
 * Use for layout of main content blocks on page
 */
const OuterColumn = ({children}: {children: any}) => (
    <div className={`col ${oCS} outer`}>
        {children}
    </div>
);

/**
 * Use for layout inside of main content blocks
 * 
 * Consist of column for image and for a text block
 */
const InnerColumn = ({children}: {children: any[]}) => (
    <div className="row inner">
        {/* Image column */}
        <div className={`col ${iCS[0]}`}>
            {children && children.length > 0 ? children[0] : ""}
        </div>

        {/* Text column */}
        <div className={`col ${iCS[1]}`}>
            {children && children.length > 1 ? children[1] : ""}
        </div>
    </div>
);

/**
 * Content block that consists of an image, text header, and text content (body)
 */
const ContentBlock = ({i}: {i: number}) => (
    <OuterColumn>
        <InnerColumn>
            <img src={content[i].image} id={`img${i}`} alt="" draggable="false"/>

            <div className="text">
                <span className="text-header">{content[i].title}</span>

                {/* Add new line for each entry in content */}
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
        {[0, 1].map(i => <ContentBlock i={i} />)}
    </div>
    <div className="row outer">
        {[2, 3].map(i => <ContentBlock i={i} />)}
    </div>

    <div className="and-more">
        <span className="text-header">And more!</span>
    </div>
</div>);

export default MainContent;