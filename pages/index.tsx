import { NextPage } from "next";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { baseUrl } from '../config';

const Home: NextPage<object> = data => (
  <>
    <h1>Expense List</h1>
    <Link href="/item">
      <a>/item</a>
    </Link>
  </>
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`${baseUrl}/expenses/5b995dff2e3cb74644948a66ff`);
  const data = await res.json();

  return {
    data
  };
};

export default Home;
