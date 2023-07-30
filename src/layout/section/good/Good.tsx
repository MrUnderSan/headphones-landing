import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Wrapper} from "../../../components/wrapper/Wrapper";
import {Title} from "../../../components/title/Title";
import {Icon} from "../../../components/icon/Icon";

export const Good = () => {
    return (
        <StyledGood>
            <Container>
                <Wrapper direction={"column"}>
                    <Title>Good headphones and loud music is all you need</Title>
                    <Specific>
                        <SpecificItem>
                            <Image>
                                <Icon iconId={"battery"}/>
                            </Image>
                            <Info>
                                <InfoTitle>Battery</InfoTitle>
                                <InfoDescription>Battery 6.2V-AAC codec</InfoDescription>
                                <InfoLink href="">Read More</InfoLink>
                            </Info>
                        </SpecificItem>
                        <SpecificItem>
                            <Image>
                                <Icon iconId={"bluetooth"}/>
                            </Image>
                            <Info>
                                <InfoTitle>Bluetooth</InfoTitle>
                                <InfoDescription>Battery 6.2V-AAC codec</InfoDescription>
                                <InfoLink href="">Read More</InfoLink>
                            </Info>
                        </SpecificItem>
                        <SpecificItem>
                            <Image>
                                <Icon iconId={"microphone"}/>
                            </Image>
                            <Info>
                                <InfoTitle>Microphone</InfoTitle>
                                <InfoDescription>Battery 6.2V-AAC codec</InfoDescription>
                                <InfoLink href="">Read More</InfoLink>
                            </Info>
                        </SpecificItem>

                    </Specific>
                </Wrapper>
            </Container>

        </StyledGood>
    );
};

const StyledGood = styled.section `
`
const SpecificItem = styled.div `
  display: flex;
`
const Image = styled.div `
`
const Info = styled.div `
`
const InfoTitle = styled.h3 `
`
const InfoDescription = styled.p `
`
const Specific = styled.div `
`
const InfoLink = styled.a `
`


