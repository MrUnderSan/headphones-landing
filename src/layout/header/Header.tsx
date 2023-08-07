import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import Logo from "../../components/logo/Logo";
import {Wrapper} from "../../components/wrapper/Wrapper";
import {Icon} from "../../components/icon/Icon";
import {Theme} from "../../styles/Theme";

export const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 24) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })



    return (
        <StyledHeader id={"header"}
                      style={isScrolled
                             ? {backgroundColor: `${Theme.colors.bg}`,
                                padding: "10px 0 10px",
                                height: "86px"}
                             : {backgroundColor: "rgba(232, 101, 100, 0)"}}
        >
            <Container>
                <Wrapper justify={"space-between"} align={"center"}>
                    <Logo></Logo>
                    <MainMenu>
                        <MainMenuLink href="">
                            <Icon width={"18"} height={"18"} viewBox={"0 0 20 20"} iconId={"search"}/>
                        </MainMenuLink>
                        <MainMenuLink href="">
                            <Icon width={"18"} height={"18"} viewBox={"0 0 20 20"}  iconId={"card"}/>
                        </MainMenuLink>
                        <MainMenuLink href="">
                            <Icon width={"18"} height={"18"} viewBox={"0 0 20 20"}  iconId={"login"}/>
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
  padding: 34px 0 34px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 134px;
  
  ${Container} {
    margin: 0 auto;
  }

`


const MainMenu = styled.div `
  display: flex;
  
  
`

const MainMenuLink = styled.a `
  width: 47px;
  height: 47px;
  border-radius: 100%;
  background-color: ${Theme.colors.element};
  color: ${Theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  
  & + & {
    margin-left: 64px;
    
    &::before {
      content: "";
      width: 2px;
      height: 100%;
      background-color: ${Theme.colors.element};
      opacity: 0.5;
      
      position: absolute;
      left: -31px;
    }
  }
  
  
  
`

const Menu = styled.div `
  width: 38px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
  
  span {
    display: inline-block;
    height: 3px;
    width: 100%;
    background-color: ${Theme.colors.element};
    border-radius: 3px;
    &:nth-child(even) {
      width: 80%;
    }
  }
  
`