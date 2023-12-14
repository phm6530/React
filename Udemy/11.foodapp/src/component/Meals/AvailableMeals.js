import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../Card/Card';

import { useState, useEffect } from 'react';

export default function AvailableMeals(){
    const [MealListArr , setMealListArr] = useState({})
    const [loading , setLoading ] =useState(false);

    

    // fireBase 데이터 뿌리기
    const fetchData = () =>{
        setLoading(true);
        fetch('https://foodapp-5016b-default-rtdb.firebaseio.com/meals.json')
        .then(res =>{
            if(!res.ok){
                throw new Error('연결 안됨');
            }  
            return res.json();
        })
        .then(data =>{
            setMealListArr(data)
            setLoading(false);
            return data;
        })
        .catch(error =>{
            console.error(error.message);
        })
    }

    useEffect(()=>{
        fetchData();
    },[]);

    
    const objValue = Object.values(MealListArr);

    const MealList = objValue.map((e)=>{
        console.log(e);
        return <MealItem key={e.id} data={e}/>
    });

    // console.log(MealList)

    return(
        <>
            <section className={classes.meals}>   
           
                <Card>
                    {loading && 'loading...'}
                    
                    <ul>{MealList}</ul>
                </Card>     
            </section>
            
        </>
    )
}