import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { calScore, judge } from "system/judge"
import { judgeMsg } from "system/judgeMsg"
import { completeOrNot, getTotals } from "system/total"
import { foodBlocks } from "values/values"

const ResultPage = ({selections}) => {
    const [totals, setTotals] = useState({totalCal: 0, totalProtein: 0, totalLove: 0})

    const navigate = useNavigate()

    useEffect(() => {
        setTotals(getTotals(foodBlocks, selections))
    }, [selections])

    useEffect(() => {
        if (!completeOrNot(selections)) navigate("/")
        // eslint-disable-next-line
    }, [])


    return <>
    <header>
        <h1>결과 발표</h1>
    </header>
    <main>
        <section>
            <h2>나의 점수</h2>
            <Score>{calScore(totals).toFixed(1)}점</Score>
        </section>
        <section>
            <h2>내가 짠 식단</h2>
            <ul>
            {selections.map((selection, i) => {
                if (selection === -1) return null
                return <li>
                    {foodBlocks[i].block_name}: {foodBlocks[i].foods[selection].name}
                </li>
            })}
            <li>칼로리 총합: {totals.totalCal}kcal</li>
            </ul>
        </section>
        <section>
            <h2>🏫 학교의 평가</h2>
            <JudgeMsg>{judgeMsg(totals)}</JudgeMsg>
        </section>
        <RateImg src={`/images/rate_${judge(totals)}.png`} alt="결과 이미지" draggable="false"/>
    </main>
    <footer>
        <p>제작: 범우주</p>
        <p>영양 데이터 제공: 김유빈</p>
    </footer>
    </>
}

const Score = styled.h1`
text-align: center;
font-size: 5rem;
`

const JudgeMsg = styled.p`
white-space: pre;
`

const RateImg = styled.img`
float: right;
width: 30%;
`

export default ResultPage