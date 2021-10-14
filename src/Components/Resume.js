import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2019 - 2020'} 
                        title={'Connekt IT solutions'}
                        subTitle={'Software development Intern'}
                        text={'Developed a Barcode generation software using Python Tkinter framework.              '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    
                    <ResumeItem 
                        year={'2018 - 2022'} 
                        title={'Shri Govindram Seksaria Institute of Technology and Science, Indore'}
                        subTitle={'B.Tech Electronics and Telecommunication Engineering '}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2016 - 2017'} 
                        title={'SICA S.S School, Indore'}
                        subTitle={'12th CBSE School Secured an aggregate of 84 percentage'}
                        text={''} 
                    />
                    
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Achievements'} />
                </div>
                <div className="resume-content ">
                    
                    <ResumeItem 
                        year={''} 
                        title={''}
                        subTitle={'Finalist (Top 10) in Philips Code to Care Challenge Season 2 out of 1000+ teams.'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={''} 
                        title={''}
                        subTitle={'Secured 514 (Global Rank 3493) in Google HashCode 2020-21'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={''} 
                        title={''}
                        subTitle={'Secured AIR 11 theme- Vitarana Drone team in Eyantra 2020-21'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={''} 
                        title={''}
                        subTitle={'Secured 253 in Google Code Jam I/O for women 2021.'}
                        text={''} 
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
        align-content : left;
    }
`;
export default Resume
