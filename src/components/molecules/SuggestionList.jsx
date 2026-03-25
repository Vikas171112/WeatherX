function SuggestionsList({ suggestions, onSelect }) {
  if (!suggestions.length) return null;

  return (
    <div className="absolute top-12 w-full bg-white text-black rounded-xl shadow-lg z-50">
      {suggestions.map((item, index) => (
        <div
          key={index}
          onClick={() => onSelect(item)}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {item.name}, {item.country}
        </div>
      ))}
    </div>
  );
}

export default SuggestionsList;
