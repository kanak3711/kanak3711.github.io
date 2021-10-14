import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';




function PortfoliosPage() {
    const [menuItem] = useState(portfolios);
    
    return (
        <MainLayout>
            <Title title={'Projects'} span={'Projects'} />
            <h2>
                Here Are some of my personal projects.
                </h2>
            <InnerLayout>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
