import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import CodeIcon from '@material-ui/icons/Code';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Kanak Verma</span></h1>
                <p>
                I am a final year undergraduate pursuing B.Tech. in Electronics & Communication in SGSITS, Indore .
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/kanak-verma-b0561019b/" className="icon i-facebook">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/kanak3711" className="icon i-facebook">
                        <GithubIcon />
                    </a>
                    <a href="https://auth.geeksforgeeks.org/user/kanak_931/practice/" className="icon i-facebook">
                        <CodeIcon />
                    </a>
                    <a href="https://www.instagram.com/kanakverma_931/" className="icon i-facebook">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
