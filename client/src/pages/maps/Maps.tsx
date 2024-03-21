import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url:any) => axios.get(url).then(res => res.data);

function Maps() {

    const {
        data: coordinates,
        error,
        isValidating,
    } = useSWR('http://localhost:3001/api/coordinates', fetcher);

    if (error) return (
        <div className='failed'>
            <p>
                failed to load coordinates. 
                {/* Error: {error}. */}
            </p>
        </div>
    );

    if (isValidating) return (
        <div className="Loading">
            <p>
                Loading coordinates...
            </p>
        </div>
    );

    return (
      <div>
        <h1>This is the Home page</h1>
        <p>
            these are the coordinates: {JSON.stringify(coordinates)}
        </p>
      </div>
    );
}

export default Maps;