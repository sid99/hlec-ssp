import React, {useRef, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";

import inputs from "./inputs";
import {FormContainer} from "../../Base/components";
import Input from "../../Base/Input";
import {ButtonStyle, FormStyle} from "../../Base/styles";
import firebase, {useAuth} from "../../../core/hooks/useFirebase";

export default function Form({buttonName}) {
  const widgetRef = useRef(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const {control, handleSubmit, errors} = useForm();
  const {bareAuth, recaptchaVerifier, signInWithPhoneNumber} = useAuth();

  const onSubmit = data => {
    const phoneNumber = '+13095331606';
    var appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(phoneNumber, appVerifier);
  }

  useEffect(() => {
    if (widgetRef) {
      firebase.auth().settings.appVerificationDisabledForTesting = true;
      var testVerificationCode = "123456";
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-widget', {
	'size': 'invisible',
	'callback': function(response) {
	  // reCAPTCHA solved, allow signInWithPhoneNumber.
	  onSubmit();
	}
      });
    }
    /*
    */
  },[]);

  return (
    <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
	{inputs.map((input) => (
	  <Input
	    key={input.name}
	    config={input}
	    control={control}
	    defaultValue=""
	    errors={errors}
	  />
	))}
	<div ref={widgetRef} id="recaptcha-widget" />
	<Button style={ButtonStyle} type="submit" variant="contained" color="primary">
	  {buttonName}
	</Button>
      </FormContainer>
    </form>
  );
}

/*
*/
