import EventForm from '../components/EventForm';
import { redirect } from 'react-router-dom';

export default function  NewEventPage(){

    return(
        <>
               <EventForm/> 
        </>
    )
}


export async function action({request}){

    const data = await request.formData();

    const formData = {
        title : data.get('title'),
        image : data.get('image'),
        date : data.get('date'),
        description : data.get('description')
    }
    console.log(formData);

    const response = await fetch('http://localhost:8080/events/',{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(formData)
    })

    console.log('완료');

    return redirect('..');
}