import Page from 'components/Page'
import { Description, Logo } from 'components/Typos'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {
    const navigate = useNavigate()

    const onKeyDown = e => {
        if (e.key === " ") { 
            navigate("/prologue")
            return
        }
    }

    return <Page onKeyDown={onKeyDown} backgroundColor={"black"}>
        <Logo white>영양사가 도망갔다</Logo>
        <Description white>스페이스 키를 눌러서 시작</Description>
    </Page>
}

export default StartPage