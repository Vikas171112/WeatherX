function Card({ children }) {
  return (
    <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg">
      {children}
    </div>
  );
}

export default Card;
