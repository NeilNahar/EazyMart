import { menu_list } from "../assets/assets";
const ExploreMenu = (props) => {
  return (
    <div className="explore-menu" id="menu">
      <h2>Explore Category</h2>
      <p>
      Find everything you need and more at our online marketplace. Browse through
  a wide range of products, from trendy fashion to cutting-edge gadgets. With
  easy navigation and secure transactions, shopping has never been more
  convenient. Elevate your shopping experience today!
      </p>
      <div>
        {menu_list.map((menu, index) => {
          return (
            <div key={index} onClick={()=>{props.setCategory(menu.menu_name)}}>
              <img className={props.category===menu.menu_name?"highlight":null} src={menu.menu_image} alt="" />
              <p className={props.category===menu.menu_name?"underline":null}>{menu.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
