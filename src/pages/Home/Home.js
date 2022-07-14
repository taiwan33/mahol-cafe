import Carausel from "../../components/Carausel";
import Card from "../../components/Card";
import Cards from "../../components/Cards";
import Date from "../../components/Date";
import Items from "../../components/Items";
import Owner from "../../components/Owner";

const Home = () => {
  return (
    <div id="home">
      <Date />
      <Carausel />
      <Card />
      <Items />
      <Owner />
      <Cards />
    </div>
  );
};

export default Home;
