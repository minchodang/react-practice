import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(url: string) {
  const [data, setDatas] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setDatas(response.data);
    });
  }, [url]);
  return data;
}
