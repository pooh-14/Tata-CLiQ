import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { AuthContext } from "../CONTEXT/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { state, Login } = useContext(AuthContext);

  const [userData, setUserData] = useState({});
  const router = useNavigate();

  const [proo, setproo] = useState(false);

  const proopen = () => {
    setproo(true);
  };

  const proclose = () => {
    setproo(false);
  };

  //   console.log(userData, "userData");

  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("Current-user"));
    if (!currentUser) {
      router("/login");
    }
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    if (currentUser && allUsers) {
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == currentUser.email &&
          allUsers[i].password == currentUser.password
        ) {
          setUserData(allUsers[i]);
        }
      }
    }
  }, []);

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem("Current-user"));
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    for (var i = 0; i < allUsers.length; i++) {
      if (
        allUsers[i].email === currentUser.email &&
        allUsers[i].password === currentUser.password
      ) {
        allUsers[i].name = userData.name;
        allUsers[i].password = userData.password;
        currentUser.password = userData.password;
        currentUser.name = userData.name;
      }
    }
    Login(currentUser);
    localStorage.setItem("Current-user", JSON.stringify(currentUser));
    localStorage.setItem("Users", JSON.stringify(allUsers));
    setUserData({});
    toast.success("Profile updated.");
    router("/profile");
  }
  return (
    <div id="full">
      {proo ? (
        <div id="propop">
          <div>
            <i onClick={proclose} class="fa-solid fa-xmark fa-xl"></i>
            <form onSubmit={handleSubmit}>
              <label>Change Name :</label>
              <br />
              <input
                type="text"
                value={userData.name}
                name="name"
                onChange={handleChange}
              />
              <br />
              <label>Change Password :</label>
              <br />
              <input
                type="password"
                value={userData.password}
                name="password"
                onChange={handleChange}
              />
              <br />
              <button onMouseLeave={proclose}>Update Profile</button>
            </form>
          </div>
        </div>
      ) : null}

      <div id="background">
        <div id="profleft">
          <p>Menu</p>
          <div>
            <img src="https://www.tatacliq.com/src/general/components/img/WL5.svg" />
            <p>My Wishlist</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" />
            <p>Order History</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/account/components/img/Neupass_monochrome.svg" />
            <p>NeuPass</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" />
            <p>Address Book</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/account/components/img/brand.svg" />
            <p>Brands</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/account/components/img/card.svg" />
            <p>Saved Payments</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/account/components/img/alert.svg" />
            <p>Alerts & Coupons</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" />
            <p>Gift Card</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" />
            <p>CLiQ Cash</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" />
            <p>Manage Notifications</p>
          </div>
          <div>
            <img src="https://www.tatacliq.com/src/account/components/img/settingsRed.svg" />
            <p>Profile</p>
          </div>
        </div>
        <div id="profbet">
          <p>General Information</p>
          <div>
            <div>
              <p>Basic Details</p>
              <span onClick={proopen}>Edit</span>
            </div>
            <div>
              <div>
                <p>First Name</p>
                <p>{userData?.name}</p>
              </div>
              <div>
                <p>Last Name</p>
                <p></p>
              </div>
              <div>
                <p>Date of Birth</p>
                <p>dd-mm-yyyy</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Contact Details</p>
              <span>Edit</span>
            </div>
            <div>
              <div>
                <p>Mobile Number</p>
                <p>+91 9930210743</p>
              </div>
              <div>
                <p>Email ID</p>
                <p>poojavetal14@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Personal Details</p>
              <span>Edit</span>
            </div>
            <div>
              <div>
                <p>Gender</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div id="profright">
          <p>
            <i class="fa-regular fa-user fa-xl"></i>
          </p>
          <p> {userData?.name}</p>
          <p>0 NeuCoins</p>
          <p>poojavetal14@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
