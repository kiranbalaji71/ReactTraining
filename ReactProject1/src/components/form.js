import React, { useReducer } from "react";
import "./form.css";

const initialState = {
  name: "",
  email: "",
  dob: "",
  phoneNumber: null,
  gender: "",
  address: "",
  state: "",
  city: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "Change":
      return { ...state, [action.name]: action.value };
    case "Submit":
      return initialState;
    default:
      return state;
  }
}

function Form({ Submit }) {
  const [formData, setFormData] = useReducer(reducer, initialState);

  const citiesByState = {
    tamilnadu: ["Chennai", "Coimbatore", "Madurai"],
    andhrapradesh: ["Hyderabad", "Visakhapatnam", "Vijayawada"],
    kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  };

  const cities = citiesByState[formData.state];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ type: "Change", name, value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    Submit(formData);
    setFormData({ type: "Submit" });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </label>
        <input
          id="others"
          type="radio"
          name="gender"
          value="others"
          onChange={handleChange}
        />
        <label htmlFor="others">Others</label>
        <br />
        <br />
        <label>Address: </label>
        <textarea
          rows="4"
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="state">
          State:
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select a state</option>
            <option value="tamilnadu">Tamil Nadu</option>
            <option value="andhrapradesh">Andhra Pradesh</option>
            <option value="kerala">Kerala</option>
          </select>
        </label>
        <br />
        <label htmlFor="city">
          City:
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select a city</option>
            {cities &&
              cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </label>
        <br />
        <input id="accept" type="checkbox" />
        <label htmlFor="accept">Above information are true</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
