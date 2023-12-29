import { ACTIONTYPE, initialFormState } from "./actions";

const formReducer = (state: initialFormState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "SET_EVENTNAME":
      return { ...state, eventname: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_HOSTNAME":
      return { ...state, host: action.payload };
    case "SET_EVENTDATE":
      return { ...state, eventdate: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_COUNTRY":
      return { ...state, country: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_POSTAL":
      return { ...state, postal: action.payload };
    case "SET_STATES":
      return { ...state, states: action.payload };
    case "SET_AUDIENCE":
      return { ...state, audience: action.payload };
    case "SET_TYPE":
      return { ...state, type: action.payload };
    case "SET_ATTENDEES":
      return { ...state, attendees: action.payload };
    case "SET_TECH":
      return { ...state, tech: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_AGENDA":
      return { ...state, agenda: action.payload };
    case "SET_APPROVAL":
      return { ...state, approval: action.payload };
    case "SET_TWITTER":
      return { ...state, twitter: action.payload };
    case "SET_WEBSITE":
      return { ...state, website: action.payload };
    case "SET_LINKEDIN":
      return { ...state, linkedin: action.payload };
    case "SET_INSTAGRAM":
      return { ...state, instagram: action.payload };

    default:
      return state;
  }
};

export default formReducer;


