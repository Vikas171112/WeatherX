function Input({ placeholder, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="px-4 py-2 rounded-full w-64 text-black outline-none"
    />
  );
}

export default Input;
