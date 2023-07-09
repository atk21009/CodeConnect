import React from "react";

export default function Fields({ input, label, meta: { error, touched } }) {
  return (
    <div className="Fields">
      <input
        {...input}
        style={{ marginBottom: "5px" }}
        className="form-field"
        placeholder={label}
        type={label}
      />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
}
