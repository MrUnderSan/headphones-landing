import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Theme} from "../../styles/Theme";

export const Carousel = (props: {imgUrlArray: Array<string>}) => {
    return (
        <StyledCarousel>
            <Icon iconId={"left-arrow"} height={"30"} width={"16"} viewBox={"0 0 24 36"}/>
            <Slider>
                {props.imgUrlArray.map((imgUrl, index) => {
                    return (
                        <Slide key={index}>
                            <Image src={imgUrl} alt="Headphones"/>
                        </Slide>
                    )
                })}
            </Slider>

            <Icon iconId={"right-arrow"} height={"30"} width={"16"} viewBox={"0 0 24 36"}/>
        </StyledCarousel>
    );
};

const StyledCarousel = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media ${Theme.media.tablet} {
    justify-content: space-around;
  }
`

const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 423px;
  
  @media ${Theme.media.tablet} {
    height: 323px;
  }
  @media ${Theme.media.mobile} {
    height: 223px;
  }
`


const Slide = styled.div`
  width: 323px;
  height: 323px;
  border-radius: 30px;
  border: 1px solid rgba(125, 117, 117, 0.30);
  @media ${Theme.media.tablet} {
    width: 223px;
    height: 223px;
  }
  @media ${Theme.media.mobile} {
    width: 163px;
    height: 163px;
  }

  &:nth-child(2) {
    width: 423px;
    height: 423px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    @media ${Theme.media.tablet} {
      width: 323px;
      height: 323px;
    }

    @media ${Theme.media.mobile} {
      width: 223px;
      height: 223px;
    }
  }

`

const Image = styled.img `
  width: 100%;
  border-radius: 30px;
`