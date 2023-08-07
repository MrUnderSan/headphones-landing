import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Container = styled.div `
  max-width: 1140px;
  width: 100%;
  padding: 0 15px;
  margin: 130px auto 0;
  outline: 1px solid red;

  @media ${Theme.media.tablet} {
    margin: 100px auto 0;
  }

  @media ${Theme.media.mobile} {
    margin: 50px auto 0;
  }
  
`