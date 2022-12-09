import { useContactsData } from "../hooks/useContactsData";

const Home = () => {
  const { data } = useContactsData(3, 4);
  console.log(data);
  return <div></div>;
};

export default Home;
