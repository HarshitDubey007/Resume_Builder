import React from "react";
import { ErrorMessage} from "formik";
import Select from "react-select";
import TextError from "../Styled/Shared/TextError";
// import TextError from "./TextError";

function InputTag(props) {
  const { label, name, formik,isMulti, options,wrapperClass,value, ...rest } = props;
  const onChange = (value) => {
    const { setFieldValue } = formik;
    setFieldValue(name, value);
  };
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, {isDisabled }) => {
      return {
        ...styles,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }
    },
    multiValue: (styles ) => {
      return {
        ...styles,
        backgroundColor: "#727cf5",
        borderColor:"#727cf5",
        borderRadius:"3px"
      };
    },
    multiValueLabel: (styles ) => ({
      ...styles,
      color: "white",
    }),
    multiValueRemove: (styles ) => ({
      ...styles,
      color: "#ffffff",
      cursor:"pointer",
      ':hover': {
        backgroundColor: "red",
        color: 'white',
      },
    }),
    
  };
  return (
    <div
      className={
        wrapperClass ? "form-group row " + wrapperClass : "form-group row"
      }
    >
      {label && (
        <label htmlFor="name" className="col-sm-3 col-form-label">
          {label}
        </label>
      )}
      <div className="col-sm-9">
        <Select
          styles={colourStyles}
          value={value}
          options={options}
          onChange={onChange}
          isMulti={isMulti}
          {...rest }
        />
      <ErrorMessage name={name} component={TextError} />
      </div>

    </div>
  );
}

export default InputTag;
