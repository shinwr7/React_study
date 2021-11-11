import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Input2 from './Input2';

function App() {

  const [count, setCount] = useState(0);

  return(
    // 2개 이상의 호출 할 때 
    // 트리 구조로 돔을 만들어야 하기 때문에 루트 노드(부모 태그)한 개 필요
    // 그래서 빈 태그에 담는다.
    <>
    <Input2/>

    </>
  );

  // 비구조화할당에 의거하여 useState의 0번째 인덱스가 count로 대입, 
  // 1번째 인덱스가 setCount함수로 대입
  // 그 증거로 const countState = useState(0);
  // console.log(countState); 찍어보면?
  // 2개의 데이터 뜬다.

  // const는 상수인데 값이 변하는 이유?
  // 리액트는 가상돔을 사용함.
  // 네이티브돔의 데이터는 실제로 변화하지 않고 
  // useState가 가상돔의 데이터를 조작하는 함수

  // const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me
  //     </button>
  //   </div>
  // );
}

export default App;
