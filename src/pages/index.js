import { Outlet } from "react-router-dom";
import StatusNetworkBar from "../components/StatusNetworkBar/StatusNetworkBar";
import StatusButton from "../components/SaveButton";
import "./style.css";

export default function Page() {
  return (
    <div className="page-container">
      <StatusNetworkBar />
      <StatusButton />
      <Outlet />
    </div>
  )
}