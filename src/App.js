import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Home from './Components/Home';
import CreateProduct from './Components/CreateProduct';
import Detail from './Components/Detail';
import EditProduct from './Components/EditProduct';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Home} />
          <Route path='/createProduct' component={CreateProduct}/>
          <Route path='/detail/:id' component={Detail}/>
          <Route path='/edit/:id' component={EditProduct}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
