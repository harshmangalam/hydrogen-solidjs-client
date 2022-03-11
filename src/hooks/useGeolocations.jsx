import { onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { useUIDispatch } from "../context/ui";
export default function useGeolocations() {
  const { addSnackbar } = useUIDispatch();
  const [store, setStore] = createStore({
    coords: {
      lat: null,
      lng: null,
    },
  });

  async function requestGeolocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation api is not supporting in your device browser");
      }

      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
      });
    });
  }

  onMount(async () => {
    try {
      const { coords } = await requestGeolocation();
      setStore("coords", "lat", coords.latitude);
      setStore("coords", "lng", coords.longitude);
      addSnackbar({
        type: "success",
        message: `Latitude is ${store.coords.lat} and Longitude is ${store.coords.lng}`,
        autoHideDuration: 8000,
      });

      setStore("location", location);
    } catch (error) {
      if (error instanceof GeolocationPositionError) {
        addSnackbar({ type: "error", message: error.message });
      }
    }
  });

  return {
    store,
  };
}
