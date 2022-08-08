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
        navigate("/loading")
    }

    useEffect(() => {
        setTotals(getTotals(foodBlocks, selections))
    }, [selections])

    return <>
    <header>
        <hgroup>
            <h1>영양사 시뮬레이터</h1>
            <h2>영양소, 선호도에 따라 식단을 짜보자!</h2>
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
            <h3>칼로리 총합: {totals.totalCal}</h3>
            <progress value={totals.totalCal} max="1000" />
        </StickyBottomArticle>
    </main>
    </>
}

export default SelectPage