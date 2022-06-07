import styled from 'styled-components'

const AskYesOrNo = ({setYN, question, answerYes, answerNo}) => {
    return <div>
        <p>{question}</p>
        <p onClick={() => setYN(true)}>{answerYes}</p>
        <p onClick={() => setYN(false)}>{answerNo}</p>
    </div>
}

export {AskYesOrNo}