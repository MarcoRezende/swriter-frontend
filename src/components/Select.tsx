import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import ReactSelect from 'react-select';
import { Props } from 'react-select';
import { styles } from '../config/react-select';

interface SelectOption {
  label: string;
  value: string | number;
}
export interface SelectProps extends Props {
  name: string;
  control: Control<FieldValues, object>;
  register: UseFormRegister<FieldValues>;
  options: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({
  name,
  control,
  isMulti,
  options,
  children,
  ...rest
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <ReactSelect
        {...field}
        {...rest}
        closeMenuOnSelect={!isMulti || options.length === 1}
        options={options}
        isMulti={isMulti}
        styles={styles}
      />
    )}
  />
);
