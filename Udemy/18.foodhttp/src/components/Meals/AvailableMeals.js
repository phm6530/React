import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import {  useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [dummyMeals ,  setDummyMeals ] = useState({});
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(null);


  // 12/14 
  const fetchData = async() =>{
     setLoading(true);
    try{
      const response = await fetch('https://foodapp-5016b-default-rtdb.firebaseio.com/meals.json');
      
      if(!response.ok){
        throw new Error('error!!');
      }
      const result = await response.json();
      
      setDummyMeals(result);
      setLoading(false);
    }
    catch(error){
      setLoading(false);
      setError(error.message)
    }
  }


  useEffect(()=>{
      fetchData()
  },[]);

  // console.log(dummyMeals);

  const mealsList = Object.values(dummyMeals).map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
      {loading && <p style={{textAlign :'center'}}>lodaindg....</p>}
      {error && <p style={{textAlign :'center' , color : 'red'}}>{error}</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
