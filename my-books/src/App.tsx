import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {Route, Routes} from 'react-router-dom';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Error from './pages/Error';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
        <ConnectedRouter history={history}>
        <Routes>
          <Route path='/edit/:id' element={<Edit />}/>
          <Route path='/book/:id' element={<Detail />}/> //상세보기 페이지
          <Route path='/add' element={<Add />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/' element={<Home />}/>
          <Route element={<NotFound />}/>
        </Routes> 
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
