import { useState, useEffect } from "react";
import BodyTop from "../components/BodyTop";
import ExploreMenu from "../components/ExploreMenu";
import DisplayMenu from "../components/DisplayMenu";
import { useSelector } from "react-redux";
import AppDownload from "../components/AppDownload";
const Home = () => {
  const [category, setCategory] = useState("");
  useEffect(() => {}, [category]);
  const food_list = useSelector((state) => state.menu);
  const food_collection=food_list.filter((item)=>{return (category===""|| category===item.category)})
  return (
    <div>
      <BodyTop />
      <ExploreMenu category={category} setCategory={setCategory} />
      <DisplayMenu food_collection={food_collection} />
      <AppDownload />
    </div>
  );
};

export default Home;
