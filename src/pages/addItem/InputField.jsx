export default function InputField({
  id,
  label,
  type = "text",
  placeholder,
  ...inputProps
}) {
  return (
    <li>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="input_style"
        type={type}
        placeholder={placeholder}
        {...inputProps}
      />
    </li>
  );
}
