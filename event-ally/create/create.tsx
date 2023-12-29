/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { AppwriteConfig } from "../constant/appwrite_config";
import { useRouter } from "next/navigation";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Header from "../components/header";
import { initialState } from "@/reducers/actions";
import formReducer from "@/reducers/reducer";

interface Sponsors {
  id: number;
  name: string;
  url: string;
}

const Create = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [banner, setBanner] = useState<File | null>(null);

  const [sponsors, setSponsors] = useState<Sponsors[]>([
    { id: 1, name: "", url: "" },
  ]);

  const handleSponsorChange = (
    id: number,
    fieldName: string,
    value: string
  ) => {
    const updatedFields = sponsors.map((field) =>
      field.id === id ? { ...field, [fieldName]: value } : field
    );
    setSponsors(updatedFields);
  };
  const handleAddSponsor = () => {
    const newField: Sponsors = {
      id: sponsors.length + 1,
      name: "",
      url: "",
    };
    setSponsors([...sponsors, newField]);
  };

  const handleRemoveSponsor = (id: number) => {
    const updatedFields = sponsors.filter((field) => field.id !== id);
    setSponsors(updatedFields);
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
    type:
      | "eventdate"
      | "eventname"
      | "description"
      | "hostname"
      | "email"
      | "country"
      | "address"
      | "city"
      | "states"
      | "postal"
      | "audience"
      | "type"
      | "attendees"
      | "price"
      | "agenda"
      | "approval"
      | "twitter"
      | "website"
      | "linkedin"
      | "instagram"
      | "tech"
  ) => {
    const payload = e.target.value;
    if (type === "eventname") {
      dispatch({ type: "SET_EVENTNAME", payload });
    }
    if (type === "description") {
      dispatch({ type: "SET_DESCRIPTION", payload });
    }
    if (type === "eventdate") {
      dispatch({ type: "SET_EVENTDATE", payload });
    }
    if (type === "hostname") {
      dispatch({ type: "SET_HOSTNAME", payload });
    }
    if (type === "email") {
      dispatch({ type: "SET_EMAIL", payload });
    }
    if (type === "country") {
      dispatch({ type: "SET_COUNTRY", payload });
    }
    if (type === "address") {
      dispatch({ type: "SET_ADDRESS", payload });
    }
    if (type === "city") {
      dispatch({ type: "SET_CITY", payload });
    }
    if (type === "states") {
      dispatch({ type: "SET_STATES", payload });
    }
    if (type === "postal") {
      dispatch({ type: "SET_POSTAL", payload });
    }
    if (type === "audience") {
      dispatch({ type: "SET_AUDIENCE", payload });
    }
    if (type === "type") {
      dispatch({ type: "SET_TYPE", payload });
    }
    if (type === "attendees") {
      dispatch({ type: "SET_ATTENDEES", payload });
    }
    if (type === "price") {
      dispatch({ type: "SET_PRICE", payload });
    }
    if (type === "agenda") {
      dispatch({ type: "SET_AGENDA", payload });
    }
    if (type === "approval") {
      dispatch({ type: "SET_APPROVAL", payload });
    }
    if (type === "twitter") {
      dispatch({ type: "SET_TWITTER", payload });
    }
    if (type === "website") {
      dispatch({ type: "SET_WEBSITE", payload });
    }
    if (type === "linkedin") {
      dispatch({ type: "SET_LINKEDIN", payload });
    }
    if (type === "instagram") {
      dispatch({ type: "SET_INSTAGRAM", payload });
    }
    if (type === "tech") {
      dispatch({ type: "SET_TECH", payload });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const {
      eventdate,
      eventname,
      description,
      hostname,
      email,
      country,
      address,
      city,
      states,
      postal,
      audience,
      type,
      attendees,
      price,
      agenda,
      approval,
      twitter,
      website,
      linkedin,
      instagram,
      tech,
    } = initialState;
    appwriteConfig
      .createEvent(
        eventname,
        description,
        banner || new File([], ""),
        hostname,
        eventdate,
        email,
        country,
        address,
        city,
        states,
        postal,
        audience,
        type,
        parseInt(attendees),
        parseInt(price),
        tech,
        agenda,
        sponsors,
        approval,
        twitter,
        website,
        linkedin,
        instagram
      )
      .then((res) => {
        if (res == "sucess") {
          router.push("/events");
        } else {
        }
      });
  };

  const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setBanner(file);
  };

  const router = useRouter();
  const appwriteConfig = new AppwriteConfig();

  return (
    <div>
      <Header />
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl text-[#f02e65] font-bold mb-4 my-5">
          Create Event
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4 ">
                  <label
                    htmlFor="eventname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Name
                  </label>
                  <div className="mt-2">
                    {}
                    <input
                      type="text"
                      name="eventname"
                      id="eventname"
                      value={state.eventname}
                      onChange={(e) => handleInputChange(e, "eventname")}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                    <span className="text-gray-600 px-3">
                      (Markdown will be suported soon)
                    </span>
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      value={state.description}
                      rows={3}
                      onChange={(e) => handleInputChange(e, "description")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about your event.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="banner"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Banner photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="col-span-2">
                        <label
                          htmlFor="banner"
                          className="text-gray-700 font-semibold"
                        >
                          Banner of Event:
                        </label>
                        <input
                          id="banner"
                          type="file"
                          accept="image/*"
                          onChange={handleBannerChange}
                          pattern="/(\.jpg|\.jpeg|\.png|\.gif)$/i"
                          className="border-2 rounded-md w-full px-3 py-2 mt-1"
                        />
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Event Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Give some specific information about your awesome event
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="audience"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Target Audience
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="audience"
                      id="audience"
                      value={state.audience}
                      onChange={(e) => handleInputChange(e, "audience")}
                      placeholder="Ex: Developers, Designers"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="type"
                      name="type"
                      value={state.type}
                      onChange={(e) => handleInputChange(e, "type")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>In Person</option>
                      <option>Virtual</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="attendees"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Expected Number of Audience
                  </label>
                  <div className="mt-2">
                    <input
                      id="attendees"
                      name="attendees"
                      type="number"
                      value={state.attendees ?? "0"}
                      onChange={(e) => handleInputChange(e, "attendees")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ticket Price (Enter 0 if free)
                  </label>
                  <div className="mt-2">
                    <input
                      id="price"
                      name="price"
                      type="number"
                      value={Number(state.price)}
                      onChange={(e) => handleInputChange(e, "price")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="tech"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tech Focused
                  </label>
                  <div className="mt-2">
                    <select
                      id="tech"
                      name="tech"
                      value={state.tech}
                      onChange={(e) => handleInputChange(e, "tech")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Yes</option>
                      <option>No</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="agenda"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Agenda
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="agenda"
                      id="agenda"
                      value={state.agenda}
                      onChange={(e) => handleInputChange(e, "agenda")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4 py-2">
                  <p className="block text-sm font-medium leading-6 text-gray-900 y-2">
                    Enter Sponsor&apos;s details
                  </p>
                  <p className="block text-sm font-medium leading-6 text-gray-600 y-2">
                    (Enter Link including https://)
                  </p>
                </div>
              </div>
              {sponsors.map((field) => (
                <div key={field.id} className="flex field-container py-2 px-2">
                  <input
                    type="text"
                    value={field.name}
                    onChange={(e) =>
                      handleSponsorChange(field.id, "name", e.target.value)
                    }
                    placeholder="Sponsor Name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />

                  <input
                    type="text"
                    value={field.url}
                    onChange={(e) =>
                      handleSponsorChange(field.id, "url", e.target.value)
                    }
                    placeholder="Sponsor Link"
                    pattern="https://.*"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <div className="px-5">
                    <button
                      type="button"
                      onClick={() => handleRemoveSponsor(field.id)}
                      className="rounded-md bg-red-500 text-white px-2 py-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="py-5">
                <button
                  onClick={handleAddSponsor}
                  type="button"
                  className="rounded bg-blue-500 text-white px-4 py-2"
                >
                  Add Sponsor
                </button>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Event Contact
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Give some contact information about your awesome event
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="hostname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Host Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="hostname"
                      id="hostname"
                      value={state.hostname}
                      onChange={(e) => handleInputChange(e, "hostname")}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="eventdate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="eventdate"
                      id="eventdate"
                      value={state.eventdate}
                      onChange={(e) => handleInputChange(e, "eventdate")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contact Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={state.email}
                      onChange={(e) => handleInputChange(e, "email")}
                      autoComplete="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      value={state.country}
                      onChange={(e) => handleInputChange(e, "country")}
                      autoComplete="country"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={state.address}
                      onChange={(e) => handleInputChange(e, "address")}
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={state.city}
                      onChange={(e) => handleInputChange(e, "city")}
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={state.states}
                      onChange={(e) => handleInputChange(e, "states")}
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal"
                      id="postal"
                      value={state.postal}
                      onChange={(e) => handleInputChange(e, "postal")}
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Social Links
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Help your attendees connect with you (Please enter proper full
                URLs along with https://)
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="twitterl"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Twitter link
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      value={state.twitter}
                      onChange={(e) => handleInputChange(e, "twitter")}
                      placeholder="https://www.twitter.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="linkedinl"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    LinkedIn link
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      value={state.linkedin}
                      onChange={(e) => handleInputChange(e, "linkedin")}
                      placeholder="https://www.linkedin.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="websitel"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Website link
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="website"
                      id="website"
                      value={state.website}
                      onChange={(e) => handleInputChange(e, "website")}
                      placeholder="https://coolwebsite.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="instagraml"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Instagram link
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="instagram"
                      id="instagram"
                      value={state.instagram}
                      onChange={(e) => handleInputChange(e, "instagram")}
                      placeholder="https://www.instagram.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Requires Approval
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Will participants need approval from your side to attend
                    event after registration?
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="yes"
                        name="approval"
                        type="radio"
                        value={state.approval ?? "Yes"}
                        onChange={(e) => handleInputChange(e, "approval")}
                        className="h-4 w-4 border-gray-300 text-[#f02e65] focus:ring-[#f02e65]"
                      />
                      <label
                        htmlFor="yes"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="no"
                        name="approval"
                        type="radio"
                        value={state.approval ?? "Yes"}
                        onChange={(e) => handleInputChange(e, "approval")}
                        className="h-4 w-4 border-gray-300 text-[#f02e65] focus:ring-[#f02e65]"
                      />
                      <label
                        htmlFor="no"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6 py-5">
            <button
              type="submit"
              className="rounded-md bg-[#f02e65] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f02e65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f02e65]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
