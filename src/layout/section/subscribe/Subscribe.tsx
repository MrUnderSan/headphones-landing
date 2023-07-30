import React from 'react';
import styled from "styled-components"
import {Container} from "../../../components/Container";
import {Wrapper} from "../../../components/wrapper/Wrapper";
import {Title} from "../../../components/title/Title";
import {Button} from "../../../components/button/Button";

export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <Container>
                <Wrapper direction={"column"}>
                    <Title>Subscribe</Title>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur </Subtitle>
                    <form action="">
                        <input type="email" placeholder={"Enter Your email address"}/>
                        <Button type={"submit"}>Subscribe</Button>

                    </form>
                </Wrapper>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section `

`
const Subtitle = styled.h4 `

`