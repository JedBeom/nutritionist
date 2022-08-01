import styled from 'styled-components'

const Div = styled.div`
background-color: ${props => props.backgroundColor};
width: 100vw;
height: 100vh;
`

const Page = ({backgroundColor, children, onKeyDown}) => {
    return <Div tabIndex="0" onKeyDown={onKeyDown} backgroundColor={backgroundColor}>
        {children}
    </Div>
}

export default Page
