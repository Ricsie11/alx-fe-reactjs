import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";

function Profile() {
  return (
    <>
      <h2>Profile</h2>

       <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </>
  );
}

export default Profile;
