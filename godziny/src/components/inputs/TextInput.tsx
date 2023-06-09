export interface Props {
  type: string;
  name: string;
  value: string | number;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        placeholder={props.placeholder}
        style={{ width: 50 }}
      />
    </div>
  );
};

export default TextInput;
