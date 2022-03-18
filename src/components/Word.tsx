import axios from 'axios';
import { useState } from 'react';

interface Iprops {
  word: IWord;
}

export interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}

export default function Word({ word: w }: Iprops) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  function toggleShow() {
    setIsShow(!isShow);
  }

  function isChecked() {
    // setIsDone(!isDone);
    axios
      .put(`http://localhost:3001/words/${word.id}`, {
        Headers: {
          'Content-Type': 'application/json',
        },
        ...word,
        isDone: !isDone,
      })
      .then((res) => {
        setIsDone(!isDone);
      });
  }

  function del() {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      axios.delete(`http://localhost:3001/words/${word.id}`).then((res) => {
        setWord({
          ...word,
          id: 0,
        });
      });
    }
  }

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" onChange={isChecked} checked={isDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'} </button>
        <button className="btn_del" onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
}
