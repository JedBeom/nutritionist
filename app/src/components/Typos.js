import styled from 'styled-components'

const Logo = styled.h1`
font-family: "Galmuri11-Bold";
font-size: 5rem;
text-align: center;
position: absolute;
top: 70vh;
`

const TitleLeftTop = styled.h1`
font-size: 4rem;
color: white;

position: absolute;
top: 7vh;
left: 7vh;
`

const TitleCenter = styled.h1`
font-size: 5rem;
color: white;

position: absolute;
margin: auto auto;
top: 0;
right: 0;
bottom: 0;
left: 0;
`

const Description = styled.p`
font-family: "Galmuri7";
font-size: 1rem;
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
bottom: 10vh;
`

export {Logo, TitleLeftTop, TitleCenter, Description}