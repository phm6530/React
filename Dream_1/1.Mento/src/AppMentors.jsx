import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  });
//   const newObject = Object.assign({}, person);
//   console.log('새로운배열 : ',newObject);
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson(prevArr =>({
            ...prevArr, mentors : [ ...prevArr.mentors ].map(e=> e.name === prev ? {...e , name : current } : e)
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>

      <button onClick={()=>{
        const add = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const addTitlte = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        setPerson(prevArr =>({
            ...prevArr, mentors : [ ...prevArr.mentors , { name : add , title : addTitlte }]
        }));
      }}>추가</button>

      
      <button onClick={()=>{
                const deleteObject = prompt(`누구의 이름을 삭제하고 싶으신가요`);
                setPerson(prevArr =>({
                    ...prevArr , mentors : [ ...prevArr.mentors ].filter((e)=>{
                        return e.name !== deleteObject
                    })
                }));
      }}>삭제</button>
    </div>
  );
}
