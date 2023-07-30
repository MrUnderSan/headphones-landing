import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import Logo from "../../components/logo/Logo";
import {Wrapper} from "../../components/wrapper/Wrapper";
import {Icon} from "../../components/icon/Icon";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Wrapper justify={"space-between"} align={"center"}>
                    <Logo></Logo>
                    <MainMenu>
                        <MainMenuLink href="">
                            <Icon iconId={"search"}/>
                        </MainMenuLink>
                        <MainMenuLink href="">
                            <Icon iconId={"card"}/>
                        </MainMenuLink>
                        <MainMenuLink href="">
                            <Icon iconId={"login"}/>
                        </MainMenuLink>
                    </MainMenu>
                    <Menu>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Menu>
                </Wrapper>

            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  padding-top: 34px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 100px;

`

const MainMenu = styled.div `

`

const MainMenuLink = styled.a `

`

const Menu = styled.div `
  width: 38px;
  height: 38px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  
  span {
    display: inline-block;
    height: 3px;
    width: 100%;
    background-color: red;
    &:nth-child(even) {
      width: 70%;
    }
  }
  
`