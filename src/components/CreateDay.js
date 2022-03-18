import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

export default function CreateDay() {
  const navigate = useNavigate();
  function addDay(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/days/`, {
        Headers: {
          'Content-Type': 'application/json',
        },
        day: days.length + 1,
      })
      .then((res) => {
        alert('생성이 완료 되었습니다 ☺️');
        navigate('/');
      });
  }

  const days = useAxios('http://localhost:3001/days');
  return (
    <div>
      <h3>현재 일수: {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
