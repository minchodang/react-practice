import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { IWord } from './Word';
import Word from './Word';

export default function Day() {
  const { day } = useParams<{ day: string }>();
  const words: IWord[] = useAxios(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
