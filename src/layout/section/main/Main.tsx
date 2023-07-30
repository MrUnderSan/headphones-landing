import React from 'react';
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {Wrapper} from "../../../components/wrapper/Wrapper";
import {Button} from "../../../components/button/Button";
import photo from "../../../assets/image/main-img.png"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Wrapper>
                    <Image src={photo}/>
                    <Wrapper direction={"column"}>
                        <SubTitle>Hear it. Feel it</SubTitle>
                        <Title>Move with the music</Title>
                        <Price>
                            <CurrentPrice>$ 435</CurrentPrice>
                            <OldPrice>$ 465</OldPrice>
                        </Price>

                        <Button>BUY NOW</Button>
                    </Wrapper>
                </Wrapper>

            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section `
  background: linear-gradient(46deg, #FF9292 0%, #DE5150 100%);
  padding-top: 100px;
  height: 100vh;
  
`
const Image = styled.img `
`
const SubTitle = styled.h2 `
`
const Title = styled.h1 `
`
const Price = styled.div `
`
const CurrentPrice = styled.span `
`
const OldPrice = styled.span `
`
