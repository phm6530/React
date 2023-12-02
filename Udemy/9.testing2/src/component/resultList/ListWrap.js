// ListWrap.js
import React from 'react';
import ListCard from './listCard';
import classes from './ListWrap.module.css';

export default function ListWrap(props) {
  const { userData } = props;

  const deleteFunc = (id) => {
        props.target(id);
  };

  return (
    <div className={classes.Cardlist}>
      {userData.map((e) => (
        <ListCard key={e.id} id={e.id} cardData={e.data} onClick={deleteFunc} />
      ))}
    </div>
  );
}