import { useLoaderData} from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();

    const events = data.events;
    
  return (
    <> 
        <EventsList events={events} />
    </>
  );

}

export async function Loader(){   
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        let errorMessage = 'Something went wrong';
        if (response.status === 404) {
            errorMessage = 'Resource not found';
        } else if (response.status >= 500) {
            errorMessage = 'Server error';
        }
        throw new Error(errorMessage);
        // return json();
    }else {
        return response;

    }
}

export default EventsPage;
