
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './normalize.css';
import './App.css';
import ChooseLesson from '../ChooseLesson/ChooseLesson';


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={ChooseLesson}/>
    </Routes>
    </BrowserRouter>

  )
  
}
export default App;
