import React from "react";
import Button from "@material-ui/core/Button";

import {UploadButtonContainer} from "./components";
import {CatalogItemButtonStyle} from "../Base/styles";
import {useAuth} from "../../core/hooks/useFirebase";

export default function UploadButtons({setLoading, setImageUrl}) {
  const {storage} = useAuth();

  const onFileChange = async e => {
    setLoading(true);
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setImageUrl(await fileRef.getDownloadURL());
    setLoading(false);
  };

  const buttonName = "Upload Item Image";

  return (
    <UploadButtonContainer>
      <input
	style={{display: "none"}}
	accept="image/*"
	id="contained-button-file"
	multiple
	type="file"
	onChange={onFileChange}
      />
      <label htmlFor="contained-button-file">
	<Button
	  style={CatalogItemButtonStyle}
	  size="medium"
	  variant="contained"
	  color="primary"
	  component="span"
	>
	  {buttonName}
	</Button>
      </label>
    </UploadButtonContainer>
  );
}
// <label style={{width: "100%"}} htmlFor="contained-button-file">
