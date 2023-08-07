import React from 'react';
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {Wrapper} from "../../../components/wrapper/Wrapper";
import {Button} from "../../../components/button/Button";
import photo from "../../../assets/image/main-img.png"
import bgImage from "../../../assets/image/main-background.svg"
import {Theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Wrapper>
                    <Image>
                        <Img src={photo}/>
                    </Image>
                    <Info>
                        <SubTitle>Hear it. Feel it</SubTitle>
                        <Title>Move with the music</Title>
                        <Price>
                            <CurrentPrice>$ 435</CurrentPrice>
                            <OldPrice>$ 465</OldPrice>
                        </Price>

                        <Button background={Theme.colors.element} color={Theme.colors.accent}>BUY NOW</Button>
                    </Info>
                </Wrapper>

            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section `
  background: linear-gradient(46deg, #FF9292 0%, #DE5150 100%);
  padding-top: 130px;
  padding-bottom: 50px;
  min-height: 100vh;
  color: ${Theme.colors.element};

  display: flex;
  align-items: center;
  
  ${Container} {
    margin: 0 auto;
  }


`
const Image = styled.div `
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;

    background: url(${bgImage}) no-repeat center/contain;

    position: absolute;
    top: 0;
    left: -10%;
    z-index: -1;
    transform: scale(140%);
  }
`
const Img = styled.img `
  max-width: 570px;
  width: 100%;
`
const Info = styled.div `
  margin-left: 95px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;;
`

const SubTitle = styled.h2 `
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 2.2px;
  text-transform: uppercase;
`
const Title = styled.h1 `
  font-size: 90px;
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;
  
  @media ${Theme.media.tablet} {
    font-size: 50px;
  }
`
const Price = styled.div `
    margin: 45px 0 35px;
  display: flex;
  align-items: center;
`
const CurrentPrice = styled.span `
  font-size: 40px;
  font-weight: 700;
  line-height: 130%;
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    width: 2px;
    height: 100%;
    background-color: ${Theme.colors.element};
    
    position: absolute;
    right: -29px;
    
  }
`
const OldPrice = styled.span `
  font-size: 31px;
  font-weight: 500;
  line-height: 140%;
  text-decoration: line-through;
  margin-left: 60px;
`
