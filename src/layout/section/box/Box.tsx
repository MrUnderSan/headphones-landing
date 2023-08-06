import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Wrapper} from "../../../components/wrapper/Wrapper";
import {Title} from "../../../components/title/Title";
import photo from "../../../assets/image/box.png";
import liArrow from "../../../assets/image/li-arrow.svg"


export const Box = () => {
    return (
        <StyledBox>
            <Container>
                <Wrapper justify={"center"} wrap={"wrap"}>
                    <Image src={photo}/>
                    <ColumnWrapper>
                        <Title>Whatever you get in the box</Title>
                        <Description>
                            <Item>5A Charger</Item>
                            <Item>Extra battery</Item>
                            <Item>Sophisticated bag</Item>
                            <Item>User manual guide</Item>
                        </Description>
                    </ColumnWrapper>
                </Wrapper>
            </Container>

        </StyledBox>
    );
};

const StyledBox = styled.section `
  ${Title} {
    text-align: left;
  }
`
const Image = styled.img `
  
`
const ColumnWrapper = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 70px 0 0 16px;
`

const Description = styled.ul `
  opacity: 0.7;
  list-style-image: url(${liArrow});
  margin-left: 56px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 48px;
`
const Item = styled.li `
  font-size: 22px;
  font-weight: 400;
  line-height: 140%;
`