import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type CardPropsType = {
    cards: {
            name: string,
            price: number,
            rating: number,
            url: string
    }[]}

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
                        <Image src={item.url} alt={item.name}/>
                        <Rating>
                              <Star></Star>
                             <Points>{item.rating}</Points>
                        </Rating>
                        <Product>
                            <Name>{item.name}</Name>
                            <Prise>$ {item.price}</Prise>
                        </Product>
                        <CardButton>
                            <Icon iconId={"shopping-card"}/>
                        </CardButton>
                    </StyledCard>
                );
            })}
        </>
    );
};


const StyledCard = styled.div `
`
const Image = styled.img `
`
const Rating = styled.div `
`
const Star = styled.div `
`
const Points = styled.span `
`
const Product = styled.div `
`
const Name = styled.h4 `
`
const Prise = styled.span `
`
const CardButton = styled.button `
`
