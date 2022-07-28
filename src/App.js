import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { history } from './utils/history'
import { AuthRoute } from '@/components/AuthRoute'
import Login from './pages/Login';
import Layout from './pages/Layout';
import Publish from './pages/Publish/Publish';
import Article from './pages/Article';
import Home from './pages/Home';
import 'antd/dist/antd.min.css'
import './App.scss'

function App() {
  return (

    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <AuthRoute>
              <Layout />
            </AuthRoute>
          }>
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish />} />

          </Route>

          <Route path='/login' element={<Login />}></Route>

        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
