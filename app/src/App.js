import { BrowserRouter, Route, Routes } from "react-router-dom"
import SelectPage from 'pages/SelectPage'
import LoadingPage from "pages/LoadingPage"
import ResultPage from "pages/ResultPage"
import { useState } from "react"

const App = () => {
    const [selections, setSelections] = useState([-1, -1, -1, -1, -1, -1])

    return <BrowserRouter>
        <Routes>
            <Route path="/result" element={<ResultPage selections={selections} />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/" element={<SelectPage selections={selections} setSelections={setSelections} />} />
        </Routes>
    </BrowserRouter>
}

export default App
