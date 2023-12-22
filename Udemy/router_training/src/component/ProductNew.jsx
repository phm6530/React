// import { redirect } from 'react-router-dom';
import ProductForm from './ProductForm';

export default function ProductNew(){

    return(
        <>
            <ProductForm/>
        </>
    )
}


export async function action({request , params}){

    const data = await request.formData();

    const formData = {
        title: data.get('title'),
        image : data.get('image'),
        date : data.get('date'),
        description : data.get('description')
    }

    const response = await fetch('http://localhost:8080/events/',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(formData)
    })

    if(!response.ok){
        throw new Error('error');
    }
    console.log('완료!');


    return response

}