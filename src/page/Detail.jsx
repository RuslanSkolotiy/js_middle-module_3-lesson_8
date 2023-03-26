import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterComponent from "../components/detail/Character";
import EpisodeComponent from "../components/detail/Episode";
import LocationComponent from "../components/detail/Location";
import characrers from "../data/characters.json";
import episode from "../data/episode.json";
import location from "../data/location.json";

const componentsMap = {
    CharacterComponent,
    EpisodeComponent,
    LocationComponent,
};

const Detail = function () {
    const { groupId, elementId } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState();
    const DetailComponent = useRef();

    useEffect(() => {
        let items = [];
        setError("");
        switch (groupId) {
            case "characters":
                items = characrers;
                DetailComponent.current = componentsMap.CharacterComponent;
                break;
            case "episode":
                items = episode;
                DetailComponent.current = componentsMap.EpisodeComponent;
                break;
            case "location":
                items = location;
                DetailComponent.current = componentsMap.LocationComponent;
                break;
            default:
                DetailComponent.current = null;
        }
        const item = items.find((i) => i.id === Number(elementId));
        setItem(item);
        if (!DetailComponent.current) {
            setError("Ошибка! Категория не найдена!");
        } else if (!item) {
            setError("Ошибка! Элемент не найден!");
        }
    }, [groupId, elementId]);

    return (
        <div>
            <h2>Detail</h2>
            {error && <strong className="error">{error}</strong>}
            {item && DetailComponent.current && (
                <DetailComponent.current data={item} />
            )}
        </div>
    );
};
export default Detail;
