import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function EditEventPage(){
    const data = useRouteLoaderData('event-loader');
    const event = data?.event;
    // console.log('EditEvent : ', data);
    
    return(
        <>
            {/* edit ID :  {param.item} */}
            <EventForm event={event}/>
        </>
    )
}