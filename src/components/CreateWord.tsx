import React, { useRef, useState } from 'react';
import useAxios from '../hooks/useAxios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IDay } from './DayList';

export default function CreateWord() {
  const days: IDay[] = useAxios('http://localhost:3001/days');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;
      axios
        .post(`http://localhost:3001/words/`, {
          Headers: {
            'Content-Type': 'application/json',
          },
          day,
          eng,
          kor,
          isDone: false,
        })
        .then((res) => {
          alert('생성이 완료 되었습니다 ☺️');
          navigate(`/day/${day}`);
          setIsLoading(false);
        });
    }
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? '저장중...' : '저장'}
      </button>
    </form>
  );
}
