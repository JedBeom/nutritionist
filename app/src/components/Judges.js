import styled from 'styled-components'

const From = styled.div`
color: black;
font-size: 5rem;
background-color: white;
border-radius: 999rem;
width: 50vw;

position: absolute;
top: 5vh;
margin: 0 auto;
left: 0;
right: 0;
`

const Content = styled.p`
color: white;
font-size: 1.3rem;
line-height: 1.5rem;

position: absolute;
top: 33vh;
left: 20vw;
`

const Sticker = styled.img`
position: absolute;
bottom: 5vh;
right: 5vw;
width: 2rem;
`

export {From, Content, Sticker}