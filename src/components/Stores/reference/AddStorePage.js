import React, {useEffect, useState} from "react";

// import Form from "./Form";
// import inputs from "./inputs";
import Banner from "./Banner";
import ImageUpload from "./ImageUpload";
import AppBar from "../Base/AppBar";
import {
  MobilePageOuterLongContainer} from "../Base/MobilePageContainers";
import {useAuth} from "../../core/hooks/useFirebase";

export default function AddStore({foo}) {
  const {db} = useAuth();

  const [loading, setLoading] = useState(false);
  const [bannerUrl, setBannerUrl] = useState(null);
  const [users, setUsers] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username || !fileUrl) {
      return;
    }
    await db.collection("users").doc(username).set({
      name: username,
      avatar: fileUrl,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();
      setUsers(
	usersCollection.docs.map((doc) => {
	  return doc.data();
	})
      );
    };
    fetchUsers();
  }, []);

  return (
    <>
      <AppBar />
      <MobilePageOuterLongContainer>
	<Banner loading={loading} url={bannerUrl} />
	<ImageUpload setImageUrl={setBannerUrl} setLoading={setLoading} />
	<ul>
	  {users.map((user) => {
	    return (
	      <li key={user.name}>
		<img width="100" height="100" src={user.avatar} alt={user.name} />
		<p>{user.name}</p>
	      </li>
	    );
	  })}
	</ul>
      </MobilePageOuterLongContainer>
    </>
  );
}

// <Form inputs={inputs} buttonName="Add Store" header="Add Store Details" />
