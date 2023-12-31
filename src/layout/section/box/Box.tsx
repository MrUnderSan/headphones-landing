import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Title} from "../../../components/title/Title";
import photo from "../../../assets/image/box.png";
import liArrow from "../../../assets/image/li-arrow.svg"
import {Theme} from "../../../styles/Theme";


export const Box = () => {
    return (
        <StyledBox>
            <Container>
                <BoxWrapper>
                    <Image src={photo}/>
                    <Title>Whatever you get in the box</Title>

                        <Description>
                            <Item>5A Charger</Item>
                            <Item>Extra battery</Item>
                            <Item>Sophisticated bag</Item>
                            <Item>User manual guide</Item>
                        </Description>

                </BoxWrapper>
            </Container>

        </StyledBox>
    );
};

const StyledBox = styled.section `
    margin-top: 70px;
    text-align: left;
    grid-area: a;
  }

  @media ${Theme.media.tablet} {
    ${Title} {
      margin-top: 0;
      margin-bottom: 30px;
      text-align: center;
    }
  }

    @media ${Theme.media.mobile} {
      ${Title} {
        margin-bottom: 0;
      }
    }

`
const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(660px, 3fr) 2fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: 
            "b a"
            "b c";
  
  @media ${Theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
            "a a"
            "b c";
  }

  @media ${Theme.media.mobile} {
    grid-template-columns: 1fr;
    grid-template-areas: 
            "a"
            "b"
            "c";
    gap: 10px;
    justify-items: center;
  }
    
`

const Image = styled.img `
  grid-area: b;
  width: 100%;
  @media ${Theme.media.mobile} {
    width: 80%;
  }
`


const Description = styled.ul `
  opacity: 0.7;
  list-style-image: url(${liArrow});
  display: flex;
  flex-direction: column;
  gap: 40px;
  grid-area: c;
  margin-left: 30px;

  @media ${Theme.media.tablet} {
    justify-content: center;
    gap: 10px;
  }
`
const Item = styled.li `
  font-size: 22px;
  font-weight: 400;
  line-height: 140%;
`