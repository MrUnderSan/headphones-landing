import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {Container} from "../../../components/Container";
import {Wrapper} from "../../../components/wrapper/Wrapper";
import {Card} from "../../../components/card/Card";
import pinkHeadphones from "../../../assets/image/product/pink.png";
import blueHeadphones from "../../../assets/image/product/blue.png";
import greenHeadphones from "../../../assets/image/product/green.png"

const cards = [
    {
        name: "Pink Headphone",
        price: 256,
        rating: 4.50,
        url: pinkHeadphones
    },    {
        name: "Blue Headphone",
        price: 235,
        rating: 4.50,
        url: blueHeadphones
    }, {
        name: "Green Headphone",
        price: 245,
        rating: 4.50,
        url: greenHeadphones
    }];
export const Latest = () => {
    return (
        <StyledLatest>
            <Container>
                <Title>Our Latest Product</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nunc ipsum aliquam, ante.</Description>
                <Wrapper justify={"center"}>
                    <Card cards={cards}/>
                </Wrapper>
            </Container>
        </StyledLatest>
    );
};

const StyledLatest = styled.section `

`
const Description = styled.p `

`