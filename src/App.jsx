
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Layout/Header/Header'
import Main from './components/Main/Main'
import { useContext } from 'react'
import { MotionStudyContext } from './context'
import Footer from './components/Layout/Footer/Footer'
import About from './components/Pages/About/About'
import University from './components/Pages/University/University'

function App() {
  const {modal} = useContext(MotionStudyContext)
  let router = [
    {
      id: 1,
      path: "/",
      element: <Main />,
    },
    {
      id: 2,
      path: "/about-us",
      element: <About />,
    },
    {
      id: 2,
      path: "/univer",
      element: <University />,
    },
  ];
  return (
   <div className='app'>
 {!modal && <Header />}
<Routes>
{router.map((el) => <Route path={el.path} element={el.element}/>)}
</Routes>
<Footer />
   </div>
  )
}

export default App
