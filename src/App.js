import './App.css';
import { BrowserRouter, Redirect, Route, Switch,Routes, useHistory } from 'react-router-dom'
import Landing from './components/Landing';
import Introduction from './components/Introduction';
import Terms from './components/Terms';
import Consult from './components/Consult';
import Info from './components/Info';
import Symptoms from './components/Symptoms';
import Interview1 from './components/Interview1';
import Interview2 from './components/Interview2';
import Interview3 from './components/Interview3';
import Result from './components/Result';
function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Routes>
        <Route exact path='/Introduction' element={
          <Introduction></Introduction>
        }>
        </Route>
        <Route exact path='/Terms' element={
          <Terms></Terms>
        }>
        </Route>
        <Route exact path='/Consult' element={
          <Consult></Consult>
        }>
        </Route>
        <Route exact path='/Info' element={
          <Info></Info>
        }>
        </Route>
        <Route exact path='/Symptoms' element={
          <Symptoms></Symptoms>
        }>
        </Route>
        <Route exact path='/Interview1' element={
          <Interview1></Interview1>
        }>
        </Route>
        <Route exact path='/Interview2' element={
          <Interview2></Interview2>
        }>
        </Route>
        <Route exact path='/Interview3' element={
          <Interview3></Interview3>
        }>
        </Route>
        <Route exact path='/Result' element={
          <Result></Result>
        }>
        </Route>
        <Route exact path='' element={
          <Landing></Landing>
        }>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
