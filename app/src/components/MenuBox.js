import styled from 'styled-components'

const Box = styled.div`
width: 5rem;
height: 7rem;
color: black;
background-color: white;

box-shadow: -2px 10px 62px 1px rgba(0,0,0,0.75);
-webkit-box-shadow: -2px 10px 62px 1px rgba(0,0,0,0.75);
-moz-box-shadow: -2px 10px 62px 1px rgba(0,0,0,0.75);
`

const MenuBox = ({name, protein, calorie, img}) => {
    return <Box>
        {img}
        <h1>{name}</h1>
        <p>칼로리 {calorie}kcal</p>
        <p>단백질 {protein}kcal</p>
    </Box>
}

const ScrollArea = styled.div`
overflow-y: scroll;
`

const MenuBoxesScroll = ({foods}) => {
    if (!foods) {
        return null
    }

    return <ScrollArea>
        {foods.map(f => {
            return <MenuBox key={f.name} name={f.name} protein={f.protein} calorie={f.calorie} img={null} />
        })}
    </ScrollArea>
}

export {MenuBoxesScroll}