import React from "react";
import moment from "moment-timezone";

import Form from "./Form";
import firebase, {useAuth} from "../../core/hooks/useFirebase";

const ItemForm = ({
  buttonName,
  type,
  defaults={},
  id,
  handleClose,
  store,
  setExpanded,
  refreshPage,
}) => {
  const {db} = useAuth();
  const itemsRef = db.collection("communities");

  const onSubmit = async data => {
    if (type === "create") {
      const createdAt = moment().unix();
      await itemsRef.add({...data, storeid: store.id, createdAt});
      firebase.analytics().logEvent("created_community");
      // setExpanded(false);
      // handleClose();
      refreshPage();
    }
    if (type === "update") {
      const itemRef = itemsRef.doc(id);
      const updatedAt = moment().unix();
      await itemRef.update({...data, updatedAt});
      firebase.analytics().logEvent("updated_community");
      setExpanded(false);
      handleClose();
      // refreshPage();
    }
  };

  return (
    <div style={{border: "1px solid white"}}>
      <Form
	buttonName={buttonName}
	onSubmit={onSubmit}
	defaults={defaults}
      />
    </div>
  );
};

export default ItemForm;
