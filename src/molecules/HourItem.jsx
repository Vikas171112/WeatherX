function HourItem({ time, temp }) {
  return (
    <div className="text-center min-w-[70px]">
      <p>{time}</p>
      <p>☀️</p>
      <p>{temp}°</p>
    </div>
  );
}

export default HourItem;
