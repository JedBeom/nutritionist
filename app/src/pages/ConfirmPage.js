import { AskYesOrNo } from 'components/Buttons'
import Page from 'components/Page'
import { useNavigate } from 'react-router-dom'

const ConfirmPage = () => {
    const navigate = useNavigate()
    const setYN = YN => {
        if (YN) {
            navigate("/judge")
        }
    }

    return <Page>
        <AskYesOrNo setYN={setYN} question="이 식단으로 만들게~" answerYes="좋아!" answerNo="잠깐만..." />
    </Page>
}

export default ConfirmPage