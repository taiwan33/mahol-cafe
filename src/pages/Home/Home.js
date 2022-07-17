import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import Carausel from "../../components/Carausel";
import Card from "../../components/Card";
import Cards from "../../components/Cards";
import Date from "../../components/Date";
import Items from "../../components/Items";
import Owner from "../../components/Owner";

const Home = () => {
  return (
    <div id="home">
      <MessengerCustomerChat pageId="107755762011189" appId="459198688985598" />
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
