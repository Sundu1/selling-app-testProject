import { FaTruckLoading } from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdOutlineInventory,
  MdPointOfSale,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SiderBar = () => {
  return (
    <div className=" fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg text-5xl">
      <div className="h-10"></div>

      <Link to="/">
        <SideBarIcon
          icon={<MdOutlineDashboard size="32" />}
          text={"DashBoard"}
        />
      </Link>
      <Link to="/inventory">
        <SideBarIcon
          icon={<MdOutlineInventory size="32" />}
          text={"Inventory"}
        />
      </Link>
      <Link to="/sales">
        <SideBarIcon icon={<MdPointOfSale size="32" />} text={"Sales"} />
      </Link>
      <Link to="/purchase">
        <SideBarIcon icon={<FaTruckLoading size="28" />} text={"Purchase"} />
      </Link>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => {
  return (
    <div className="siderbar-icon group">
      {icon}
      <span className="sider-toolkit group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SiderBar;
