import { useNavigate } from "react-router-dom"
import useInterval from "utils/useInterval"

const LoadingPage = () => {
    const navigate = useNavigate()
    useInterval(() => navigate("/result"), 2000)

    return <main>
        <h1>계산 중이에요.</h1>
        <progress aria-busy="true" />
    </main>
}

export default LoadingPage