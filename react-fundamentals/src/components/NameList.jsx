import React from 'react';
import Person from './Person';

export default function NameList() {
  const names = ['Bruce', 'Clarck', 'Diana'];
  //   const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue',
    },
  ];

  //   const personList = persons.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));

  return (
    <div>
      {/* {personList} */}
      {nameList}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
    </div>
  );
}
