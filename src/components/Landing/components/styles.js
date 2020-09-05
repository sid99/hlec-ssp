import { PrimaryColor, SecondaryColor } from './config';

export default {
  landingHeader: {
    width: '100%',
    height: 60,
    position: 'fixed',
    backgroundColor: PrimaryColor,
    zIndex: 2,
  },
  topBarOuterContainer: {
    backgroundColor: PrimaryColor,
    borderWidth: 2,
    borderColor: 'black',
  },
  getStarted: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Nunito',
    color: '#000000',
    // border: '4px solid red',
    border: '1px solid black',
    width: 90,
    height: 24,
    top: 21,
    right: 45,
    position: 'fixed',
    // align-text: 'center',
    // text-align: center;
    zIndex: 2,
    borderRadius: 4,
  },
  getStartedTextContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  callToActionOne: {
    width: 300,
    height: 50,
    // borderRadius: 8,
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: 'Nunito',
    fontSize: 16,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
  },
  statsContainer: {
    backgroundColor: PrimaryColor,
    border: '0px solid red',
  },
  statsCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PrimaryColor,
    textAlign: 'center',
    verticalTextAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    // border: '1px solid black',
    height: 100,
  },
  statsCardTitleOne: {
    fontSize: 44,
    fontFamily: 'Nunito',
  },
  statsCardTitleTwo: {
    fontSize: 18,
    fontFamily: 'Nunito',
  },
  testimonialsInnerContainer: {
    backgroundColor: '#ffffff',
  },
  testimonialsTitleOne: {
    fontSize: 28,
    fontFamily: 'Nunito',
    color: '#000000',
    lineHeight: '32px',
  },
  callToActionTitleOne: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Nunito',
    color: '#000000',
  },
  callToActionContainer: {
    marginTop: 50,
    backgroundColor: PrimaryColor,
  },
  callToActionTwo: {
    width: 300,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: 'Nunito',
    fontSize: 16,
  },
  about_header: {
    fontSize: 20,
    // textAlign: 'center',
    fontFamily: 'Nunito',
    color: '#575757',
    textDecoration: 'none',
    // paddingLeft: 5,
    // border: '1px solid black',
  },
  about_body: {
    fontSize: 18,
    fontFamily: 'Nunito',
    color: '#424228',
    // paddingLeft: 5,
    // border: '1px solid black',
  },
  company_body: {
    fontSize: 12,
    fontFamily: 'Nunito',
    color: '#424228',
    // border: '1px solid black',
  },
  email_body: {
    textAlign: 'center',
    // fontSize: 18,
    fontFamily: 'Nunito',
    color: '#424228',
    // paddingLeft: 40,
    // border: '1px solid black',
  },
  disclaimer_body: {
    fontSize: 14,
    fontFamily: 'Nunito',
    color: '#424228',
    // border: '1px solid black',
  },
};