
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import TodoWrapper from './components/TodoWrapper'
import HistoryWrapper from './components/HistoryWrapper'

function App() {

    return (
        <>
            <NavBar />

            <Routes>
                <Route path='/' element={<TodoWrapper />} />
                <Route path='/history' element={<HistoryWrapper />} />
            </Routes>
            
        </>
    )
}

export default App
