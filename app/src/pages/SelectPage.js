import StickyBottomArticle from "components/FloatBottom"
import FoodSelection from "components/FoodSelection"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { completeOrNot, getTotals } from "system/total"
import { foodBlocks } from "values/values"

const SelectPage = ({selections, setSelections}) => {
    const [totals, setTotals] = useState({totalCal: 0, totalProtein: 0, totalLove: 0})
    const navigate = useNavigate()

    const goResult = () => {
        if (!completeOrNot(selections)) {
            alert("아직 고르지 않은 메뉴가 있습니다!")
            return
        }
        if (selections[3] === selections[4]) {
            alert("부메뉴끼리는 선택이 달라야 합니다!")
            return
        }
        navigate("/loading")
    }

    useEffect(() => {
        setTotals(getTotals(foodBlocks, selections))
    }, [selections])

    return <>
    <header>
        <hgroup>
            <h1>영양사 시뮬레이터</h1>
            <h2>칼로리, 단백질, 선호도를 신경쓰며 식단을 짜보자! 칼로리는 900kcal에 가깝게 구성해보자.</h2>
        </hgroup>
    </header> 
    <main>
        {foodBlocks.map((block, i) => {
            return <FoodSelection key={i} blockIndex={i} block={block} selections={selections} setSelections={setSelections} />
        })}
        <section>
            <h2>식단 확인</h2>
            {selections.map((selection, i) => {
                if (selection === -1) return null
                return <article>
                    <h4>{foodBlocks[i].block_name}</h4>
                    {foodBlocks[i].foods[selection].name} — {foodBlocks[i].foods[selection].calorie}kcal
                </article>
            })}
            <button onClick={goResult}>완성!</button> 
        </section>
        <StickyBottomArticle>
            <h4>선택한 칼로리 총합: {totals.totalCal}kcal</h4>
            <progress value={totals.totalCal} max="1000" />
        </StickyBottomArticle>
    </main>
    </>
}

export default SelectPage