import {useState} from 'react';

const calculator = () => {
  const [prev,setPrev] = useState(0);
  const [cur,setCur] = useState(0);
  const [operate,setOperate] = useState();

  return <div>
    <button onClick={(setCur(1))}>1</button>
    </div>
}

export default calculator;