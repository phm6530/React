import { Form, useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ event }) {
  

  const navigate = useNavigate();

  function cancelHandler() {
    navigate(-1);
  }

  return (
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" 
              type="text" 
              name="title" 
              defaultValue={event ?  event.title : ''} 
              required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" 
          type="url" name="image" required 
          defaultValue={event?  event.image : ''}
          />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required 
          defaultValue={event ? event.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required 
           defaultValue={event ? event.description : ''}
           />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type='submit'>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
