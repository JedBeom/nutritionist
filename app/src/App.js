import { BrowserRouter, Route, Routes } from "react-router-dom"
import SelectPage from 'pages/SelectPage'

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<SelectPage />} />
        </Routes>
    </BrowserRouter>
}

export default App
