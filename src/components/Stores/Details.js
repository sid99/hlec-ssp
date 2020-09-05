import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";

import {
  BusinessInfoContainer,
} from "./components";
import Banner from "./Banner";
import BusinessInfo from "./BusinessInfo";
import UpdateStoreDialog from "./UpdateStoreDialog";
import Spinner from "../Base/Spinner";
import {ButtonWithoutMarginStyle} from "../Base/styles";
import {useAuth} from "../../core/hooks/useFirebase";
import {
  MobilePageInnerContainer,
} from "../Base/MobilePageContainers";

/*
 * Banner
 * Business Info
 */
const Details = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const {user, db} = useAuth();
  const buttonName = "Update";

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    const fetchStores = () => {
      const storesRef = db.collection("stores");
      const query = storesRef.where("owner", "==", user.uid);
      query.onSnapshot(querySnapshot => {
	const stores = querySnapshot.docs.map(
	  doc => ({id: doc.id, ...doc.data()}));
	setStore(stores[0]);
	setLoading(false);
      });
    };
    if (user) {
      fetchStores();
    }
  }, [user]);

  if (loading) return <Spinner />;
  if (!store) return <Spinner />;

  console.log(store);

  return (
    <>
      <Banner loading={loading} url={store.bannerUrl} />
      <BusinessInfoContainer>
	<BusinessInfo store={store} />
      </BusinessInfoContainer>
      <UpdateStoreDialog
	open={dialogOpen}
	handleClose={handleDialogClose}
	store={store}
      />
      <MobilePageInnerContainer>
	<Button
	  style={ButtonWithoutMarginStyle}
	  type="submit"
	  variant="contained"
	  color="primary"
	  onClick={handleDialogOpen}
	>
	  {buttonName}
	</Button>
      </MobilePageInnerContainer>
    </>
  );
};

export default Details;
