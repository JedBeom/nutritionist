import { MenuBoxesScroll } from "components/MenuBox"
import { CalorieMeter, NextButton, Steps } from "components/MenuSelects"
import Page from "components/Page"
import { TitleLeftTop } from "components/Typos"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { josaObj } from "utils/josa"
import { foodBlocks } from "values/values"

const PickPage = () => {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()
    const next = () => {
        if (index === 4) {
            navigate("/confirm")
            return
        }
        setIndex(i => i+1)
    }

    return <Page>
        <Steps step={1} />
        <TitleLeftTop>{josaObj(foodBlocks[index].block_name)} 골라보자</TitleLeftTop>
        <MenuBoxesScroll foods={foodBlocks[index].foods} />
        <CalorieMeter calorie={189} />
        <NextButton onClick={next}>다음</NextButton>
    </Page>
}

export default PickPage