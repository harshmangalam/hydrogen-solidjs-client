export default function Radio(props) {
  return (
    <div className="flex items-center space-x-2">
      <input
        id={props.value}
        onChange={props.onChange}
        value={props.value}
        type="radio"
        checked={props.isChecked}
        name={props.name}
        className="dark:bg-gray-600"
        required
      />
      <label htmlFor={props.value}>{props.label}</label>
    </div>
  );
}
