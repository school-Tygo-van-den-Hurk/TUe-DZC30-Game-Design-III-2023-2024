import axios from 'axios';
import useSWR from 'swr';

//// const fetcher = (...args:any[URL]) => fetch(...args).then((res) => res.json());
const fetcher = (url:any) => axios.get(url).then(res => res.data);

function Home() {

    const {
        data: coordinates,
        error,
        isValidating,
    } = useSWR('http://localhost:3001/api/coordinates', fetcher);

    if (error) return <div className='failed'>failed to load: </div>;
    if (isValidating) return <div className="Loading">Loading...</div>;

    return (
      <div>
        <h1>This is the Home page</h1>
        <p>
            these are the coordinates: {JSON.stringify(coordinates)}
        </p>
      </div>
    );
}

export default Home;