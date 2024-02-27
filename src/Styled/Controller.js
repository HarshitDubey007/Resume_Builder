import React from 'react'
import Input from '../FormControl/Input';
import InputTag from '../FormControl/InputTag';
import SimpleSelect from '../FormControl/SimpleSelect';
// import Input from './Input';
// import './controller.css'



function Controller(props) {
   const {control, ...rest}=props;
   switch (control) {
      case "input":
        return <Input {...rest} />;
      case "multiSelect":
        return <InputTag {...rest} />
      case "simpleSelect":
        return <SimpleSelect {...rest} />
    //   case "radio":
    //     return <Radio {...rest} />
    //   case "textArea":
    //     return <TextArea {...rest} />
   }
}

export default Controller
