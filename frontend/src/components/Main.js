import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import ChampView from '../pages/ChampView';

const Main = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/champview' element={<ChampView/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Main;