import React from "react";

function Dropdown(props) {
  const { sorts, handleChange } = props;
  return (
    <select
      id="selector"
      onChange={event => {
        event.persist();
        handleChange(event);
      }}
    >
      {sorts.map((sort, index) => (
        <option key={index} value={sort.toLowerCase()}>
          {sort}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
