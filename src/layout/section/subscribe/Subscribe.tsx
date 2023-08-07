import React from 'react';
import styled from "styled-components"
import {Container} from "../../../components/Container";
import {Title} from "../../../components/title/Title";
import {Button} from "../../../components/button/Button";
import subscribeBgRight from "../../../assets/image/subscribe-bg-right.svg";
import subscribeBgLeft from "../../../assets/image/subscribe-bg-left.svg"
import {Theme} from "../../../styles/Theme";

export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <Container>
                <SubscribeContainer>
                    <SubscribeWrapper>
                        <Title>Subscribe</Title>
                        <Subtitle>Lorem ipsum dolor sit amet, consectetur </Subtitle>
                        <Form action="">
                            <Input type="email" placeholder={"Enter Your email address"}/>
                            <Button type={"submit"}>Subscribe</Button>

                        </Form>
                    </SubscribeWrapper>
                </SubscribeContainer>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section `

  text-align: center;
  
  ${Container} {
    margin-bottom: 130px;
  }

  @media ${Theme.media.tablet} {
    ${Container} {
      margin-bottom: 100px;
    }
  }
  
`

const SubscribeContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: url(${subscribeBgLeft});
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    max-width: 196px;
    transform: scale(90%);
    z-index: -1;
  }

  &::after {
    content: url(${subscribeBgRight});
    display: inline-block;
    position: absolute;
    max-width: 164px;
    top: 0;
    right: 0;
    transform: scale(90%);
    z-index: -1;
  }
`

const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 712px;
  width: 100%;
  min-height: 292px;
  border-radius: 20px;
  background: #FFF4F4;
  
  @media ${Theme.media.tablet} {
    max-width: 600px;
  }

`

const Subtitle = styled.h4 `
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  opacity: 0.7;
  margin: 6px 0 36px;
`

const Form = styled.form`
  position: relative;
  
  ${Button} {
    position: absolute;
    right: 0;
  }
`

const Input = styled.input`
  width: 503px;
  height: 61px;
  padding: 15px 30px;
  border-radius: 73px;
  border: none;

  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  &::placeholder {

    opacity: 0.3;
  }
`