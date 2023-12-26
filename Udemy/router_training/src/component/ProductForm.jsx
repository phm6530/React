import { Form, useNavigate , useNavigation , redirect , useActionData } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method  , event }) {
  console.log('method : ', method);
  const data = useActionData(); // action의 처리 후 결과를 받을때 사용함

  const submitting = useNavigation().state === 'submitting';
  


  const navigate = useNavigate();

  function cancelHandler() {
    navigate(-1);
  }

  console.log(data);
  const errMsg = data && Object.values(data.errors);
  console.log(errMsg);
  
  return (
    <Form method={method} className={classes.form}>
      <ul>
      {data && errMsg.map((e, idx)=>{
        return <li key={idx}>{e}</li>;
      })}
      </ul>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" 
              type="text" 
              name="title" 
              defaultValue={event ?  event.title : ''} 
               />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" 
          type="url" name="image" 
          defaultValue={event?  event.image : ''}
          />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" 
          defaultValue={event ? event.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5"
           defaultValue={event ? event.description : ''}
           />
      </p>
      <div className={classes.actions}>

        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>

        <button type='submit'>
          {submitting ? 'submiting....'  : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;




export async function action({request ,params}){
  console.log('params : ',params);
  const token = localStorage.getItem('token')
  
  
  
  let url = 'http://localhost:8080/events/';

  if(request.method === 'PATCH'){
      url = 'http://localhost:8080/events/' + params.item;
  }

    const data = await request.formData();
    const formData = {
      title: data.get('title'),
      image : data.get('image'),
      date : data.get('date'),
      description : data.get('description')
    }
    console.log(url);
    console.log(request.method);

    const response = await fetch(url,{
      method: request.method,
      headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      },
      body : JSON.stringify(formData)
  })
  if(response.status === 422){
    return response;
  }

  if(!response.ok){
    throw new Error('error');
  }
  await new Promise(resolve => setTimeout(resolve , 1500));

  return redirect('/products');
}
