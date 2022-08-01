import ConfirmPage from "pages/ConfirmPage"
import JudgePage from "pages/JudgePage"
import PickPage from "pages/PickPage"
import ProloguePage from "pages/ProloguePage"
import StartPage from "pages/StartPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/prologue" element={<ProloguePage/>} />
            <Route path="/pick" element={<PickPage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
            <Route path="/judge" element={<JudgePage />} />
            <Route path="/" element={<StartPage/>} />
        </Routes>
    </BrowserRouter>
}

export default App
