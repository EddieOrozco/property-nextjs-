import Link from 'next/link';

const HomePage = () => {
    return ( 
      <div>
        <h1>Welcome</h1>
        <Link href="/properties?name=test">Link to properties</Link>
      </div>
     );
}
 
export default HomePage;