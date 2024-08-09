"use client";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const InputItem = ({ type }) => {
  const [value, setValue] = useState(null);

  return (
    <div className="bg-slate-200 p-3 rounded-lg mt-3">
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value,
          onChange: setValue,
          placeholder: type === "source" ? "Pickup Location" : "Drop Location",
          isClearable: true,
          className: "w-full",
          components: {
            DropdownIndicator: () => null, // Hide the dropdown indicator
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none", // Remove the box shadow
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 9999, // Ensure the dropdown appears above other elements
            }),
          },
        }}
      />
    </div>
  );
};

export default InputItem;
