import Map from "../components/Map.jsx";
import Sidebar from "../components/Sidebar.jsx";
import User from "../components/User.jsx";
import styles from "./AppLayout.module.css";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
