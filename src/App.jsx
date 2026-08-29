import { HashRouter } from 'react-router-dom'
import './App.css'
import MyRoutes from './router/MyRoutes';

function App() {


  return (
    <div className="layaout">
      <HashRouter>
        <MyRoutes />
      </HashRouter>

    </div>
  )
}

export default App
