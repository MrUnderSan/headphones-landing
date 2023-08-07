import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {Logo} from "../../components/logo/Logo";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterWrapper>
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
                            <Icon iconId={"instagram"}
                                  height={"21"}
                                  width={"21"}
                                  viewBox={"0 0 22 22"}/>
                        </SocialLink>
                        <SocialLink href="">
                            <Icon iconId={"twitter"}
                                  height={"24"}
                                  width={"20"}
                                  viewBox={"0 0 24 18"}/>
                        </SocialLink>
                        <SocialLink href="">
                            <Icon iconId={"facebook"}
                                  height={"22"}
                                  width={"13"}
                                  viewBox={"0 0 15 20"}/>
                        </SocialLink>
                    </Social>
                </FooterWrapper>

            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
  padding: 62px 0;
  background-color: ${Theme.colors.bg};
  
  ${Container} {
    margin: 0 auto;
  }
  
  @media ${Theme.media.tablet} {
    padding: 30px 0;
  }

  @media ${Theme.media.mobile} {
    padding: 10px 0;
  }

`

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${Theme.media.mobile} {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 20px;
  }
`


const MenuLink = styled.a `
  font-size: 22px;
  font-weight: 500;
  line-height: 140%;
`
const SocialLink = styled.a `
  width: 51px;
  height: 51px;
  border-radius: 100%;
  background-color: ${Theme.colors.element};
  color: ${Theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Menu = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  
`
const Social = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 35px;

`