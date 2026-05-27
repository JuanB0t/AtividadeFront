import './App.css'
import Footer from './Components/Footer/Index'
import Header from './Components/Header/Index'

import AdicionarUsuario from './pages/AdicionarUsuario/Index'

function App() {

  return (
    <>
    <Header />
    <main>
        <AdicionarUsuario />
    </main>
    <Footer/>
    </>
  )
}

export default App
