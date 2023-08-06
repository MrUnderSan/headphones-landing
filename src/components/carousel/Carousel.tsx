import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

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
`

const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  height: 423px;
`


const Slide = styled.div`
  width: 323px;
  height: 302px;
  border-radius: 30px;
  border: 1px solid rgba(125, 117, 117, 0.30);

  &:nth-child(2) {
    width: 453px;
    height: 423px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

`

const Image = styled.img `
  width: 100%;
  border-radius: 30px;
`