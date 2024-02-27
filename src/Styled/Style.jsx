import React from "react";
import Controller from "./Controller";

function Style(props) {
  const {
    name,
    wrapperClass,
    defaultValue,
    styleName,
    formik,
    defaultObj,
    ...rest
  } = props;

  let value = ""
  switch (defaultValue.length) {
    case 1:
      value = formik.values[defaultValue[0]];
      break;
    case 2:
      value = formik.values[defaultValue[0]][defaultValue[1]];
      break;
    case 3:
      value = formik.values[defaultValue[0]][defaultValue[1]][defaultValue[2]];
      break;
    case 4:
      value = formik.values[defaultValue[0]][defaultValue[1]][defaultValue[2]][defaultValue[3]];
      break;
    case 5:
      value = formik.values[defaultValue[0]][defaultValue[1]][defaultValue[2]][defaultValue[3]][defaultValue[4]];
      break;
    case 6:
      value = formik.values[defaultValue[0]][defaultValue[1]][defaultValue[2]][defaultValue[3]][defaultValue[4]][defaultValue[5]];
      break;
    case 7:
      value = formik.values[defaultValue[0]][defaultValue[1]][defaultValue[2]][defaultValue[3]][defaultValue[4]][defaultValue[5]][defaultValue[6]];
      break;
  }
  return (
    <fieldset>
      <legend>{styleName}</legend>
      {value && Object.keys(value).map((item, index) => (
        <Controller
          keys={index}
          control="input"
          type={item === "backgroundColor" || item === "color" || item === "borderColor" ? "color" : "text"}
          name={`${name}[${item}]`}
          label={item}
          placeholder={`Enter ${item}`}
          value={value[item]}
          inlineStyle={item === "backgroundColor" || item === "color" || item === "borderColor" ? { height: "50px", maxWidth: window.screen.width < 700 ? "100%" : "25%" } : null}
          {...rest}
        />
      ))}
    </fieldset>
  );
}

export default Style;
