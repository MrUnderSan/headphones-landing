import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Carousel = (props: {imgUrlArray: Array<string>}) => {
    return (
        <StyledCarousel>
            <Icon iconId={"left-arrow"}/>
            {props.imgUrlArray.map((imgUrl) => {
                return <Image src={imgUrl} alt="Headphones"/>
            })}
            <Icon iconId={"right-arrow"}/>
        </StyledCarousel>
    );
};

const StyledCarousel = styled.div `
`
const Image = styled.img `
  width: 30%;
`