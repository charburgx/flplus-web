/**
 * Frequently Asked Questions page
 */

import React, { Fragment } from 'react';
import InfoPage, { Info } from 'pages/InfoPage';
import { WIN_ISSUES, WIN_WIKI } from 'api/constants'

const content: Info[] = [
    {
        title: "Is FL Plus available on Mac?",
        content: [
            "There are currently no plans for FL Plus on Mac, sorry."
        ]
    },
    {
        title: "Is this legal?",
        content: [
            "Given the recent DMCA on another project auxiliary to FL (which will not be named here), it is worth addressing the legality of our project.",
            <Fragment>The following is crucial: <b>FL Plus is in no way a modification of FL Studio's code</b>. Everything one can achieve with FL Plus is doable without FL Plus and without making any changes to the FL Studio executable. <b>FL Plus simply takes functionality that already exists and makes it faster.</b></Fragment>,
            "That being said, FL Plus is 100% willing to cooperate with Image-Line on any legal matters."
        ]
    },
    {
        title: "It isn't working!",
        content: [
            <Fragment>Most likely, this is because you have not detached your windows. A guide for this can be found <a href={WIN_WIKI}>here</a>.</Fragment>,
            <Fragment>If this is not the case, you can always issue a ticket on the <a href={WIN_ISSUES}>GitHub Issues</a> page. In case you have encountered an error, hopefully someone can fix it soon. Please keep in mind that this is a small project effectively run by one person, so you might not get immediate support.</Fragment>
        ]
    }
];

const FAQPage = () => <InfoPage page="Frequently Asked Questions" info={content} />

export default FAQPage;