import { Component, useState } from "react";

function Input2 () {
    // inputs는 이제 name, nickname, age 3개 요소에 대해서
    // 관리를 합니다.
    const [inputs, setInputs] = useState({
        name : '', // 1번 input을 담당할 name
        nickname : '', // 2번 input을 담당할 nickname
        age : ''
    });

    console.log(inputs); // 2개의 변수가 내장되어 있음
    const {name, nickname, age} = inputs; // 다시 두개로 쪼갬

    const onChange = (e) => {
        const {value, name, age} = e.target;
        console.log(e.target); // 해당하는 input 태그 한줄을 가져옴
        
        console.log("value : " + value);
        console.log("name : " + name);
        setInputs({
        // 불변성을 지키면서 변동을주기 위해서는
        // name이나 nickname에 직접적인 값을 입력하는게 아니라
        ...inputs, // = name : '', nickname : ''
        [name] : value // 내가 클릭한 name값을 value매칭
        
        });
        
        
    }
    const onReset = () => {
        setInputs({
           name : '', 
           nickname : '',
           age : '' 
        });
    }
    
    // input들을 묶어서 관리하고 있으므로
    // 이벤트 하나에서 input들을 모두 관리해야함
   

    return (
        <div>
            <input placeholder="이름" name = "name" value ={name} onChange={onChange}/>
            <input placeholder="별명" name = "nickname" value ={nickname} onChange={onChange}/>
            <input placeholder="나이" name= "age" value ={age} onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <br/>
            <b>값 : {name}({nickname}){age}</b>
        </div>
    );

}
export default Input2;