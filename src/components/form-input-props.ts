import { TextFieldProps } from "@mui/material";

export default interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    textFieldProps?: TextFieldProps;
  }