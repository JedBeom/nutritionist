import styled from 'styled-components'

const Button = styled.button`
`

const NextButton = ({onClick}) => {
    return <Button onClick={onClick}>다음</Button>    
}

const TimeLimitNotice = ({sec}) => {
    return <p>{sec}초 남았어!!</p>
}

const CalorieMeter = ({calorie}) => {
    return <p>총합 {calorie}kcal</p>
}

const Steps = ({step}) => {
    return <p>{step}/6단계</p>
}

export {NextButton, TimeLimitNotice, CalorieMeter, Steps}