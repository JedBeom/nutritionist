import styled from 'styled-components'

const Logo = styled.h1`
font-family: "Galmuri11";
font-weight: 700;
font-size: 5rem;
color: ${props => props.white ? "white" : "black"};
position: absolute;
top: 70vh;
margin: 0 auto;
text-align: center;
left: 0;
right: 0;
`

const TitleLeftTop = styled.h1`
font-size: 3.5rem;
color: ${props => props.white ? "white" : "black"};

position: absolute;
top: 7vh;
left: 7vh;
`

const TitleCenter = styled.h1`
font-size: 5rem;
color: ${props => props.white ? "white" : "black"};

position: absolute;
margin: auto auto;
top: 0;
right: 0;
bottom: 0;
left: 0;
`

const Description = styled.p`
font-family: "Galmuri7";
font-size: 2rem;
white-space: pre-wrap;
line-height: 150%;

color: ${props => props.white ? "white" : "black"};

position: absolute;
text-align: center;
margin: 0 auto;
left: 0;
right: 0;
bottom: 10vh;
`

export {Logo, TitleLeftTop, TitleCenter, Description}