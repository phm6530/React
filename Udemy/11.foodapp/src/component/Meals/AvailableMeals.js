import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../Card/Card';
import { v4 as uuidv4 } from 'uuid';


const MealListArr = [
    {
        id : uuidv4(),
        MealName : 'SuShi',
        description : 'Des',
        pirce : 18.99
    },
    {
        id : uuidv4(),
        MealName : 'Time',
        description : 'Des',
        pirce : 15.99
    },
    {
        id : uuidv4(),
        MealName : 'Lemon',
        description : 'Des',
        pirce : 12.99
    },
    
]


export default function AvailableMeals(){
    
    const MealList = MealListArr.map((e)=> <MealItem key={e.id} data={e}/>)

    return(
        <>
            <section className={classes.meals}>   
                <Card>
                    <ul>{MealList}</ul>
                </Card>     
            </section>
            
        </>
    )
}