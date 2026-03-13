import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../app/features/auth/authSlice";
import { useNavigate } from "react-router";
import { BASE_BACKEND_URL } from "../constants/appConstants";

const ViewProfileComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await axios.post(
        `${BASE_BACKEND_URL}/api/auth/logout`,
        {},
        { withCredentials: true },
      );

      dispatch(logout());

      navigate("/auth/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div>
      <button
        className="border rounded-2xl p-2 m-4 hover:bg-[var(--color-primary)]"
        onClick={handleSignout}
      >
        Signout
      </button>
    </div>
  );
};

export default ViewProfileComponent;
