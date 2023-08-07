import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Container = styled.div `
  max-width: 1140px;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 130px auto 0;
  outline: 1px solid red;
  overflow: hidden;

  @media ${Theme.media.tablet} {
    margin: 100px auto 0;
  }
  
`