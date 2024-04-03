import {useState} from "react"
import BodyTop from "../components/BodyTop";
import ExploreMenu from "../components/ExploreMenu";
import DisplayMenu from "../components/DisplayMenu";
const Home = () => {
  const [category, setCategory] = useState("")
  return (
    <div>
      <BodyTop />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <DisplayMenu category={category} />
    </div>
  );
};

export default Home;
