import React from "react";
import Button from "@material-ui/core/Button";

import {FlexCenterContainer} from "../Base/components";
import {ButtonStyle} from "../Base/styles";
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

  const buttonName = "Upload Photo";

  return (
    <FlexCenterContainer>
      <input
	style={{display: "none"}}
	accept="image/*"
	id="contained-button-file"
	multiple
	type="file"
	onChange={onFileChange}
      />
      <label style={{width: 200}} htmlFor="contained-button-file">
	<Button
	  style={ButtonStyle}
	  variant="contained"
	  color="primary"
	  component="span"
	>
	  {buttonName}
	</Button>
      </label>
    </FlexCenterContainer>
  );
}
