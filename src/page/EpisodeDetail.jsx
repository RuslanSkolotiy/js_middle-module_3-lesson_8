import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeComponent from "../components/detail/Episode";
import episode from "../data/episode.json";

export default function () {
    const { elementId } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState();

    useEffect(() => {
        setError("");
        const item = episode.find((i) => i.id === Number(elementId));
        setItem(item);
    }, [elementId]);

    return (
        <div>
            <h2>Detail</h2>
            {error && <strong className="error">{error}</strong>}
            {item && <EpisodeComponent data={item} />}
        </div>
    );
}
