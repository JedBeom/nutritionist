const AskYesOrNo = ({setYN, question, answerYes, answerNo}) => {
    return <div>
        <p>{question}</p>
        <p onClick={() => setYN(true)}>{answerYes} (Y)</p>
        <p onClick={() => setYN(false)}>{answerNo} (N)</p>
    </div>
}

export {AskYesOrNo}