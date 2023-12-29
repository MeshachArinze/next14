export interface initialFormState {
  eventname: string;
  description: string;
  hostname: string;
  eventdate: string;
  email: string;
  country: string;
  address: string;
  city: string;
  states: string;
  postal: string;
  audience: string;
  type: string;
  attendees: string;
  tech: string;
  price: string;
  agenda: string;
  approval: string;
  twitter: string;
  website: string;
  linkedin: string;
  instagram: string;
}

export type ACTIONTYPE =
  | { type: "SET_EVENTNAME"; payload: string }
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_HOSTNAME"; payload: string }
  | { type: "SET_EVENTDATE"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_COUNTRY"; payload: string }
  | { type: "SET_ADDRESS"; payload: string }
  | { type: "SET_CITY"; payload: string }
  | { type: "SET_STATES"; payload: string }
  | { type: "SET_POSTAL"; payload: string }
  | { type: "SET_AUDIENCE"; payload: string }
  | { type: "SET_TYPE"; payload: string }
  | { type: "SET_ATTENDEES"; payload: string }
  | { type: "SET_TECH"; payload: string }
  | { type: "SET_PRICE"; payload: string }
  | { type: "SET_AGENDA"; payload: string }
  | { type: "SET_APPROVAL"; payload: string }
  | { type: "SET_TWITTER"; payload: string }
  | { type: "SET_WEBSITE"; payload: string }
  | { type: "SET_LINKEDIN"; payload: string }
  | { type: "SET_INSTAGRAM"; payload: string };

export const initialState = {
  eventname: "",
  description: "",
  hostname: "",
  eventdate: "",
  email: "",
  country: "",
  address: "",
  city: "",
  states: "",
  postal: "",
  audience: "",
  type: "",
  attendees: "0",
  tech: "",
  price: "0",
  agenda: "",
  approval: "",
  twitter: "",
  website: "",
  linkedin: "",
  instagram: "",
};
