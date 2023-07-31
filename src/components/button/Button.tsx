import styled from "styled-components";
import {Theme} from "../../styles/Theme";

type ButtonPropsType = {
    background?: string;
    color?: string
}

export const Button = styled.button<ButtonPropsType> `
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border: none;
  height: 60px;
  padding: 0 30px;
  border-radius: 60px;
  background: ${props => props.background || Theme.colors.accent};
  color: ${props => props.color || Theme.colors.element};


  font-size: 22px;
  font-weight: 500;
  line-height: 140%;
`