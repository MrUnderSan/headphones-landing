import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Wrapper} from "../../../components/wrapper/Wrapper";
import {Title} from "../../../components/title/Title";
import photo from "../../../assets/image/box.png"

export const Box = () => {
    return (
        <StyledBox>
            <Container>
                <Wrapper justify={"center"}>
                    <Image src={photo}/>
                    <Wrapper direction={"column"}>
                        <Title>Whatever you get in the box</Title>
                        <Description>
                            <Item>5A Charger</Item>
                            <Item>Extra battery</Item>
                            <Item>Sophisticated bag</Item>
                            <Item>User manual guide</Item>
                        </Description>
                    </Wrapper>
                </Wrapper>
            </Container>

        </StyledBox>
    );
};

const StyledBox = styled.section `

`
const Image = styled.img `

`
const Description = styled.ul `

`
const Item = styled.li `

`