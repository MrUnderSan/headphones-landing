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
        url: pinkHeadphones,
        colour: "#FFE5EE"
    },    {
        name: "Blue Headphone",
        price: 235,
        rating: 4.50,
        url: blueHeadphones,
        colour: "#E5F1FF"
    }, {
        name: "Green Headphone",
        price: 245,
        rating: 4.50,
        url: greenHeadphones,
        colour: "#E5FFFB"
    }];
export const Latest = () => {
    return (
        <StyledLatest>
            <Container>
                <Title>Our Latest Product</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nunc ipsum aliquam, ante.</Description>
                <Wrapper justify={"center"} wrap={"wrap"}>
                    <Card cards={cards}/>
                </Wrapper>
            </Container>
        </StyledLatest>
    );
};

const StyledLatest = styled.section `
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  
  ${Wrapper} {
    gap: 50px;
  }
`
const Description = styled.p `
    margin: 25px 0 90px;

`