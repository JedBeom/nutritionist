import FoodSelection from "components/FoodSelection"
import { useState } from "react"
import { foodBlocks } from "values/values"

const SelectPage = () => {
    const [selections, setSelections] = useState([-1, -1, -1, -1, -1, -1])

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
        {selections.map((selection, i) => {
            if (selection === -1) return null
            return <article>
                <h4>{foodBlocks[i].block_name}</h4>
                {foodBlocks[i].foods[selection].name}
            </article>
        })}
    </main>
    </>
}

export default SelectPage