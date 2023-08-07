import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Title} from "../../../components/title/Title";
import {Icon} from "../../../components/icon/Icon";
import photo from "../../../assets/image/feauture-img.png"
import {Theme} from "../../../styles/Theme";

const features = [
    {
        name: "Battery",
        description: "Battery 6.2V-AAC codec",
        icon: "battery",
        viewBox: "0 0 36 24"
    },
    {
        name: "Bluetooth",
        description: "Battery 6.2V-AAC codec",
        icon: "bluetooth",
        viewBox: "0 0 36 36"
    },
    {
        name: "Microphone",
        description: "Battery 6.2V-AAC codec",
        icon: "microphone",
        viewBox: "0 0 34 34"
    }
]

export const Good = () => {
    return (
        <StyledGood>
            <Container>
                <GoodWrapper>
                    <Title>Good headphones and loud music is all you need</Title>
                    <Specific>

                        {features.map((f, index) => {
                            return (
                                <SpecificItem key={index}>
                                    <Image>
                                        <Icon iconId={f.icon}
                                              width={"36"}
                                              height={"36"}
                                              viewBox={f.viewBox}
                                        />
                                    </Image>
                                    <Info>
                                        <InfoTitle>{f.name}</InfoTitle>
                                        <InfoDescription>{f.description}</InfoDescription>
                                        <InfoLink href="">Read More</InfoLink>
                                    </Info>
                                </SpecificItem>
                            )
                        })}

                    </Specific>
                    <GoodImageWrapper>
                        <GoodImage src={photo} alt={"yellow headphones"}/>
                    </GoodImageWrapper>
                </GoodWrapper>
            </Container>

        </StyledGood>
    );
};

const StyledGood = styled.section`

`
const GoodWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(460px, 1fr) 1fr;
  grid-template-rows: repeat(auto-fit, auto);
  gap: 60px;
  grid-template-areas: 
            "a c"
            "b c";

  ${Title} {
    text-align: left;
    grid-area: a;
  }

  @media ${Theme.media.tablet} {
    gap: 30px;
    grid-template-columns: 1fr 1fr;
    
  }

  @media ${Theme.media.mobile} {
    grid-template-columns: 1fr;
    grid-template-areas: 
            "a"
            "c"
            "b";
    gap: 10px;
    justify-items: center;
    ${Title} {
      text-align: center;
    }
  }
`

const SpecificItem = styled.div`
  grid-area: b;
  display: flex;
`
const Image = styled.div`
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${Theme.colors.accent};

  &::before {
    content: "";
    width: 96px;
    height: 96px;
    border-radius: 100%;
    border: 6px solid rgba(246, 128, 128, 0.5);
    border-bottom: 6px solid rgba(246, 128, 128, 1);
    border-left: 6px solid rgba(246, 128, 128, 1);
    transform: rotate(-45deg);
    position: absolute;
  }
  &::after {
    content: "";
    width: 69px;
    height: 69px;
    border-radius: 100%;
    border: 2px solid rgba(246, 128, 128, 0.5);
    position: absolute;
  }
`
const Info = styled.div`
    margin-left: 50px;
  @media ${Theme.media.mobile} {
    margin-left: 20px;
  }
`
const InfoTitle = styled.h3`
  font-size: 31px;
  font-weight: 500;
  line-height: 140%;
`
const InfoDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`
const Specific = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${Theme.media.tablet} {
    gap: 10px;
  }

`
const InfoLink = styled.a`
  color: ${Theme.colors.accent};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`

const GoodImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: c;

  @media ${Theme.media.mobile} {
    width: 80%;
  }
`

const GoodImage = styled.img`
  width: 100%;
`


