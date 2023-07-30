import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {Wrapper} from "../../components/wrapper/Wrapper";
import Logo from "../../components/logo/Logo";
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Wrapper justify={"space-between"} align={"center"}>
                    <Logo></Logo>
                    <Menu>
                        <MenuLink href="">
                            Home
                        </MenuLink>
                        <MenuLink href="">
                            About
                        </MenuLink>
                        <MenuLink href="">
                            Product
                        </MenuLink>
                    </Menu>
                    <Social>
                        <SocialLink href="">
                            <Icon iconId={"instagram"}/>
                        </SocialLink>
                        <SocialLink href="">
                            <Icon iconId={"twitter"}/>
                        </SocialLink>
                        <SocialLink href="">
                            <Icon iconId={"facebook"}/>
                        </SocialLink>
                    </Social>
                </Wrapper>

            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.header `
    padding-top: 35px;
    background-color: #E86564;

`


const MenuLink = styled.a `

`
const SocialLink = styled.a `

`
const Menu = styled.div `
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: space-between;

  
`
const Social = styled.div `
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  
`