import { useState } from "react";

const GenderSelector = ({ gender, setGender }) => {
  return (
    <div className="flex mt-2 gap-x-6">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            className="radio radio-info"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            className="radio radio-info"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderSelector;
