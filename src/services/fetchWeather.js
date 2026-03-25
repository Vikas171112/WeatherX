import axios from "axios";

export async function fetchWeather(lat, long) {
  try {
    const result = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&
current=temperature_2m,wind_speed_10m`,
    );
    console.log(result);
    return result.data;
  } catch (error) {
    console.log("Error Found", error);
  }
}
