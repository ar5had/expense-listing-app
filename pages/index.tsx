import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
    <>
        <h1>Expense List</h1>
        <Link href="/item"><a>/item</a></Link>
    </>
);

export default Home;