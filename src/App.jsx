
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import Home from './pages/Home'
import FullArticlePage from './pages/FullArticlePage'
import UserSelect from './pages/UserSelect'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<FullArticlePage />} />
        <Route path='/users' element={<UserSelect />} />
      </Routes>
    </div>
  )
}

export default App
