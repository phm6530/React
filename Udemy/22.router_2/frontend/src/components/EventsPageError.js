import { useCatch } from 'react-router-dom';

function EventsPageError() {
    const caught = useCatch();
    return <h1>Error loading events: {caught.statusText}</h1>;
}

export default EventsPageError;