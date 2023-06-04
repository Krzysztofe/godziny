export interface Props {
  type: string;
  name: string;
  value: string | number;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput = (props: Props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;
