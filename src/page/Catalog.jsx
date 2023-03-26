import { useEffect, useState } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import characrers from "../data/characters.json";
import episode from "../data/episode.json";
import location from "../data/location.json";

const Catalog = function () {
    const { groupId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const [error, setError] = useState();
    const [filter, setFilter] = useState({
        sort: searchParams.get("sort") || "created",
        order: searchParams.get("order") || "ASC",
    });

    useEffect(() => {
        setError("");
        switch (groupId) {
            case "characters":
                setItems(characrers);
                break;
            case "episode":
                setItems(episode);
                break;
            case "location":
                setItems(location);
                break;
            default:
                setItems([]);
                setError("Ошибка! Категория не найдена!");
        }

    }, [groupId]);

    const handleFilter = (data) => {
        setFilter(data);
        setSearchParams({
            sort: data.sort,
            order: data.order,
        });
    };

    items.sort((a, b) => {
        switch (filter.sort) {
            case "created":
                if (new Date(a.created) > new Date(b.created)) {
                    return filter.order === "ASC" ? 1 : -1;
                }
                if (new Date(a.created) < new Date(b.created)) {
                    return filter.order === "ASC" ? -1 : 1;
                }
                return 0;
                break;
        }
        return 0;
    });

    return (
        <div>
            <h2>Catalog</h2>
            {error && <strong className="error">{error}</strong>}
            <Filter filter={filter} onChange={handleFilter}></Filter>
            <section>
                {items.map((item) => {
                    return (
                        <section key={item.id}>
                            <Link to={"/" + groupId + "/" + item.id}>
                                {new Date(item.created).toLocaleString()}{" "}
                                {item.name}
                            </Link>
                        </section>
                    );
                })}
            </section>
        </div>
    );
};
export default Catalog;
