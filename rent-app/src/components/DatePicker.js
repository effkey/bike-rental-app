import { useState } from "react";

export function DatePicker(props) {
  const today = new Date().toISOString().substring(0, 10);
  //   const [minDate, setMinDate] = useState(today);
  const [minDate] = useState(today);
  const [date, setDate] = useState("");
  props.onChange(date);
  return (
    <>
      <input
        className="w-40 bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-lg py-2 px-4 block  appearance-none leading-normal float-right"
        type="date"
        id="start"
        name="trip-start"
        min={minDate}
        onChange={(event) => {
          setDate(event.target.value);
        }}
      ></input>
    </>
  );
}
