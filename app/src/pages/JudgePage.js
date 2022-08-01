import { Sticker, Content, From } from 'components/Judges'
import Page from 'components/Page'

const JudgePage = () => {
    return <Page backgroundColor="black">
        <From>학생들의 평가</From>
        <Content>맛이 없다.{"\n"}어떻게 먹으라는 거냐?</Content>
        <Sticker src="" />
    </Page>
}

export default JudgePage