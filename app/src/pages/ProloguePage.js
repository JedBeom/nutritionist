import CenterImage from "components/CenterImage"
import Page from "components/Page"
import { Description, TitleLeftTop } from "components/Typos"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useInterval from "utils/useInterval"
import { texts } from "values/values"

const ProloguePage = () => {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()


    const loop = () => {
        if (index === 3) navigate("/pick")
        setIndex(i => i+1)
    }

    useInterval(loop, 1000)

    return <Page backgroundColor="black">
        <TitleLeftTop white>프롤로그 {index}</TitleLeftTop>
        <CenterImage draggable={false} src="/images/prologueExample.png" />
        <Description white>{texts.prologue[index]}</Description>
    </Page>
}

export default ProloguePage