import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Title} from "../../../components/title/Title";
import {Carousel} from "../../../components/carousel/Carousel";
import redHeadphones from "../../../assets/image/colour/red.png";
import blueHeadphones from "../../../assets/image/colour/blue.png";
import coralHeadphones from "../../../assets/image/colour/coral.png"

const imgArr = [
    `${redHeadphones}`,
    `${blueHeadphones}`,
    `${coralHeadphones}`
]
export const Colour = () => {
    return (
        <StyledColour>
            <Container>
                <Title>Our Latest colour collection 2021</Title>
                <Carousel imgUrlArray={imgArr}/>
            </Container>

        </StyledColour>
    );
};

const  StyledColour = styled.section `
    
`