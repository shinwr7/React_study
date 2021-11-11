import { Component, useState } from "react";

function Input2 () {
    // inputs는 이제 name, nickname 2개 요소에 대해서
    // 관리를 합니다.
    const [inputs, setInputs] = useState({
        name : '', // 1번 input을 담당할 name
        nickname : '' // 2번 input을 담당할 nickname
    });

    console.log(inputs); // 2개의 변수가 내장되어 있음
    const {name, nickname} = inputs; // 다시 두개로 쪼갬
    console.log(setInputs);

    // input들을 묶어서 관리하고 있으므로
    // 이벤트 하나에서 input들을 모두 관리해야함
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs(e.target.value);
    } 

    return (
        <div>
            <input placeholder="이름" value ={name} onChange={onChange}/>
            <input placeholder="별명" value ={nickname} onChange={onChange}/>
            <button>초기화</button>
            <br/>
            <b>값 : </b>
        </div>
    );

}
export default Input2;