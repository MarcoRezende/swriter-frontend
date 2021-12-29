import { StylesConfig } from 'react-select';

export const styles: StylesConfig = {
  control: provided => ({
    ...provided,
    background: 'var(--gray-700)',
    border: 0,
    borderRadius: '10px',
    fontFamily: 'Poppins',
    minHeight: '2.5rem',
    overflow: 'hidden',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0.5rem 1rem',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'var(--gray-200)',
    padding: '0',
    flex: '1',
    display: 'flex',
    width: '2rem',
    justifyContent: 'center',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    maxWidth: '4rem',
    background: 'var(--gray-400)',
  }),

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  clearIndicator: provided => ({
    ...provided,
    display: 'none',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'var(--text-white)',
    marginLeft: '0.5rem',
  }),
  multiValue: provided => ({
    ...provided,
    background: 'var(--blue-700)',
    color: 'var(--blue-200)',
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: 'var(--blue-200)',
  }),
  multiValueRemove: provided => ({
    ...provided,
    '&:hover': {
      background: 'var(--input-focused)',
      color: 'white',
      borderRadius: 0,
    },
  }),
  menu: provided => ({
    ...provided,
    background: 'var(--gray-700)',
    padding: 0,
  }),
  menuList: provided => ({
    ...provided,
    padding: 0,
    color: 'var(--text-white)',
  }),
  option: provided => ({
    ...provided,
    background: 'transparent',
    fontSize: '1rem',
    '&:hover': {
      background: 'var(--input-focused)',
    },
  }),
  placeholder: provided => ({
    ...provided,
    fontSize: '1rem',
    marginLeft: '0.5rem',
    position: 'absolute',
  }),
  input: provided => ({
    ...provided,
    color: 'var(--text-white)',
    marginLeft: '0.5rem',
  }),
  noOptionsMessage: provided => ({
    ...provided,
    fontSize: '0.9rem',
  }),
};
