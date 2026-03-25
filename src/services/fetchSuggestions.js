import axios from "axios";

export async function fetchSuggestions(city) {
  try {
    const cityData = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );
    console.log("Successfully Fetched Data:", cityData);
    return cityData.data;
  } catch (error) {
    console.log("Error in Fetching Data:", error);
  }
}
