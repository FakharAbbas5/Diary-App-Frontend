import React from "react";

const CustomInput = ({
  type,
  placeholder,
  onChange,
  inputStyle,
  name,
  value,
}) => {
  return (
    <div className='customInput' style={{ ...inputStyle }}>
      <h2>{placeholder}</h2>
      {type === "textarea" ? (
        <textarea onChange={onChange} name={name} value={value} />
      ) : (
        <input
          type={type}
          onChange={onChange}
          name={name}
          value={value}
          style={{ ...inputStyle }}
        />
      )}
    </div>
  );
};

export default CustomInput;
