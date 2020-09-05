import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

import Spinner from "../Base/Spinner";
import AppBar from "../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";
// import {useAuth} from "../../core/hooks/useFirebase";

const PaymentVerficationPage = () => {
  // const {user, db} = useAuth();
  // const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // const {orderid} = router.query;

  useEffect(() => {
  }, []);

  if (loading) return <Spinner />;

  const headerTitle = "Becho Payment Verfication";

  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  <div style={{paddingTop: 200, fontSize: 32}}>Verified!</div>
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
};

export default PaymentVerficationPage;
