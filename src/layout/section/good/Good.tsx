import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Wrapper} from "../../../components/wrapper/Wrapper";
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
                <Wrapper direction={"column"}>
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
                    <GoodImage src={photo} alt={"yellow headphones"}/>
                </Wrapper>
            </Container>

        </StyledGood>
    );
};

const StyledGood = styled.section`
  position: relative;

  ${Title} {
    max-width: 460px;
    text-align: left;
  }

`
const SpecificItem = styled.div`
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
  margin: 60px 0 0 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;

`
const InfoLink = styled.a`
  color: ${Theme.colors.accent};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`
const GoodImage = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
`


