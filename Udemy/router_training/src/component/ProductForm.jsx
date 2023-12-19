import { useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ event }) {
  const { title , image , date , description} = event;

  const navigate = useNavigate();
  function cancelHandler() {
    navigate(-1);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" 
              type="text" 
              name="title" 
              defaultValue={title} 
              required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" 
          type="url" name="image" required 
          defaultValue={image}
          />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required 
          defaultValue={date}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required 
           defaultValue={description}
           />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
