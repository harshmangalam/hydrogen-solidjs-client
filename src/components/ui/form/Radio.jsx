export default function Radio({ name, label, value, onChange, isChecked }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        id={value}
        onChange={onChange}
        value={value}
        type="radio"
        checked={isChecked}
        name={name}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}
