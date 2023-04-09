import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import location from "../data/location.json";
import { useGetLocations } from "../hooks/useGetLocations";

export default function () {
    const [pageNumber, setPageNumber] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    const [filter, setFilter] = useState({
        sort: searchParams.get("sort") || "created",
        order: searchParams.get("order") || "ASC",
    });

    const observer = useRef();

    const { isLoading, items, hasMore, error } = useGetLocations(pageNumber);

    const lastNodeRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) {
                observer.current.disconnect();
            }
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber((prevState) => prevState + 1);
                }
            });
            if (node) {
                observer.current.observe(node);
            }
        },
        [isLoading, hasMore]
    );

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
                {items.map((item, index) => {
                    if (items.length === index + 1) {
                        return (
                            <section key={item.id} ref={lastNodeRef}>
                                <Link to={"/location/" + item.id}>
                                    {new Date(item.created).toLocaleString()}{" "}
                                    {item.name}
                                </Link>
                            </section>
                        );
                    } else {
                        return (
                            <section key={item.id}>
                                <Link to={"/location/" + item.id}>
                                    {new Date(item.created).toLocaleString()}{" "}
                                    {item.name}
                                </Link>
                            </section>
                        );
                    }
                })}
            </section>
        </div>
    );
}
