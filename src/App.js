import DayList from './components/DayList';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';
import Day from './components/Day.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/*" element={<EmptyPage />}></Route>
          <Route path="/create_word" element={<CreateWord />}></Route>
          <Route path="/create_day" element={<CreateDay />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
