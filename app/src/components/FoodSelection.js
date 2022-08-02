import { josaObj } from "utils/josa"

const FoodSelection = ({blockIndex, block, selections, setSelections}) => {
    if (!block) return null

    const handleChange = e => {
        let stageArray = [...selections]
        stageArray[blockIndex] = Number(e.target.value)
        setSelections(stageArray)
    }

    return <section>
        <h3>{blockIndex+1}. {josaObj(block.block_name)} 골라보자</h3>
        <fieldset>
        {block.foods.map((food, i) => (
            <label key={i} htmlFor={food.name}>
                <input type="radio" id={`${food.name} ${blockIndex}`}
                 name={`${block.block_name} ${blockIndex}`} value={i} checked={selections[blockIndex] === i}
                 onChange={handleChange} />
                {food.name} — {food.calorie}kcal
            </label>
        ))}
        </fieldset>
    </section>
}

export default FoodSelection