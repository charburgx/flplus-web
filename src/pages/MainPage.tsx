import React from 'react';
import Header from 'ui/header/Header';
import MainContent from 'ui/main_page/MainContent';
import { GHVersion } from 'api/constants';

const MainPage = ({ ver }: { ver: GHVersion }) => (
    <div className="main">
        <Header ver={ver} />
        <MainContent />
    </div>
)

export default MainPage;