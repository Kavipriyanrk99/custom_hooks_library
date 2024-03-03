import { useEffect, useState } from "react";

// optional options object
// refer https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#fine_tuning_the_response
// const options = {
//     enableHighAccuracy: true,
//     maximumAge: 30000,
//     timeout: 27000,
// };

const useWatchPosition = (options) => {
    const [position, setPosition] = useState({
        latitude : undefined,
        longitude : undefined,
    });

    useEffect(() => {
        const watchID = navigator.geolocation.watchPosition(
            (position) => {
                setPosition({
                    latitude : position.coords.latitude,
                    longitude : position.coords.longitude
                });
            },
            (error) => {
                console.error(`error: ${error.message}`);
            },
            options
        );

        return () => navigator.geolocation.clearWatch(watchID);
    }, []);

    return position;
}

export default useWatchPosition;