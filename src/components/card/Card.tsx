import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Theme} from "../../styles/Theme";

type CardPropsType = {
    cards: {
        name: string,
        price: number,
        rating: number,
        url: string,
        colour: string
    }[]
}

// варианты:
/*
type CardType = {
    name: string,
    price: number,
    rating: number,
    url: string
}
*/

/*
type CardPropsType = {
    cards: CardType[]
};
*/

/*
type CardPropsType = Array<CardType>;
*/


export const Card = (props: CardPropsType) => {
    return (
        <>

            {props.cards.map((item, index) => {
                return (
                    <StyledCard key={index}>
                        <ImageWrapper style={{background: item.colour}}>
                            <Image src={item.url} alt={item.name}/>
                            <CardButton style={{background: item.colour}}>
                                <Icon iconId={"shopping-card"} height={"31"} width={"31"} viewBox={"0 0 31 31"}/>
                            </CardButton>
                        </ImageWrapper>
                        <Rating>
                            <Star>&#9733; &#9733; &#9733; &#9733; &#9733;</Star>
                            <Points>{item.rating}</Points>
                        </Rating>
                        <Product>
                            <Name>{item.name}</Name>
                            <Prise>$ {item.price}</Prise>
                        </Product>

                    </StyledCard>
                );
            })}
        </>
    );
};


const StyledCard = styled.div`

`

const ImageWrapper = styled.div`
  width: 332px;
  height: 332px;
  border-radius: 30px;

  position: relative;

  @media ${Theme.media.mobile} {
    width: 300px;
    height: 300px;
  }
`


const Image = styled.img`
  position: absolute;
  bottom: 20px;
  left: 24px;

  @media ${Theme.media.mobile} {
    width: 76%;
  }
`
const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0 15px;
`
const Star = styled.div`
  font-size: 36px;
  color: ${Theme.colors.gold};
`
const Points = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const Name = styled.h4`
  font-size: 22px;
  font-weight: 400;
  line-height: 140%;
`
const Prise = styled.span`
  font-size: 22px;
  font-weight: 500;
  line-height: 140%;
`
const CardButton = styled.button`
  width: 78px;
  height: 78px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 6px solid white;
  color: ${Theme.colors.gray};

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
`
