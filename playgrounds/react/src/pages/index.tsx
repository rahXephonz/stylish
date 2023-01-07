import { NextPage } from "next";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/home",
    },
  };
}

const Home: NextPage = () => {
  return null;
};

export default Home;
