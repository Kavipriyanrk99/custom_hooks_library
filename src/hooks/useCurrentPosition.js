import { useEffect, useState } from "react";

// optional options object
// refer https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#fine_tuning_the_response
// const options = {
//     enableHighAccuracy: true,
//     maximumAge: 30000,
//     timeout: 27000,
// };

const useCurrentPosition = (options) => {
    const [position, setPosition] = useState({
        latitude : undefined,
        longitude : undefined,
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
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
        )
    }, []);

    return position;
}

export default useCurrentPosition;