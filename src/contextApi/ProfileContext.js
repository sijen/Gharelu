import { createContext, useState } from "react";
const ProfileContext = createContext();
export function ProfileProvider(props) {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();
  const [district, setDistrict] = useState();
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const [bio, setBio] = useState();
  const [uid, setUid] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();

  // <------------------alert-------------->
  const [alert, setAlert] = useState({});
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <ProfileContext.Provider
      value={{
        firstname,
        setFirstname,
        lastname,
        setLastname,
        contact,
        setContact,
        address,
        setAddress,
        district,
        setDistrict,
        long,
        setLong,
        lat,
        setLat,
        bio,
        setBio,
        uid,
        setUid,
        image,
        setImage,
        email,
        setEmail,
        alert,
        setAlert,
        showAlert,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext;
