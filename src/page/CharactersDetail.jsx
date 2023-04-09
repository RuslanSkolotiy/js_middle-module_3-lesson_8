import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterComponent from "../components/detail/Character";
import characrers from "../data/characters.json";

export default function () {
    const { elementId } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState();

    useEffect(() => {
        setError("");
        const item = characrers.find((i) => i.id === Number(elementId));
        setItem(item);
    }, [elementId]);

    return (
        <div>
            <h2>Detail</h2>
            {error && <strong className="error">{error}</strong>}
            {item && <CharacterComponent data={item} />}
        </div>
    );
}
