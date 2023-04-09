import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LocationComponent from "../components/detail/Location";
import location from "../data/location.json";

export default function () {
    const { elementId } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState();

    useEffect(() => {
        setError("");
        const item = location.find((i) => i.id === Number(elementId));
        setItem(item);
    }, [elementId]);

    return (
        <div>
            <h2>Detail</h2>
            {error && <strong className="error">{error}</strong>}
            {item && <LocationComponent data={item} />}
        </div>
    );
}
