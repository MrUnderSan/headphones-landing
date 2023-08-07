import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const Title = styled.h2 `
  text-align: center;
  font-size: 44px;
  font-weight: 700;
  line-height: 130%;

  @media ${Theme.media.tablet} {
    font-size: 34px;
  }
  
`