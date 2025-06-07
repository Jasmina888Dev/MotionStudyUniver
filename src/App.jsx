
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Layout/Header/Header'
import Main from './components/Main/Main'
import { useContext } from 'react'
import { MotionStudyContext } from './context'

function App() {
  const {modal} = useContext(MotionStudyContext)
  let router = [
    {
      id:1,
      path:"/",
      element:<Main />
    }
  ]
  return (
   <>
 {!modal && <Header />}
<Routes>
{router.map((el) => <Route path={el.path} element={el.element}/>)}
</Routes>
   </>
  )
}

export default App
