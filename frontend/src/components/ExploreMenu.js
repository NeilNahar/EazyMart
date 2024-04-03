import { menu_list } from "../assets/assets";
const ExploreMenu = (props) => {
  return (
    <div className="explore-menu">
      <h2>Explore Menu</h2>
      <p>
        Explore our extensive menu and embark on a delightful culinary journey,
        where each dish is crafted to tantalize your taste buds and leave you
        craving for more
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
