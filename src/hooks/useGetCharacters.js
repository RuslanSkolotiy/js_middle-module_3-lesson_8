import axios from "axios";
import { useEffect, useState } from "react";

export function useGetCharacters(pageNumber) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        let cancel;
        axios({
            method: "GET",
            url: "https://rickandmortyapi.com/api/character",
            params: { page: pageNumber },
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                setItems((prevState) =>
                    [...prevState, ...res.data.results].reduce((o, i) => {
                        if (!o.find((v) => v.id === i.id)) {
                            o.push(i);
                        }
                        return o;
                    }, [])
                );
                setHasMore(res.data.info.pages > pageNumber);
                setIsLoading(false);
            })
            .catch((e) => {
                if (axios.isCancel(e)) {
                    return;
                }
                setError(true);
            });
        return () => cancel();
    }, [pageNumber]);

    return { isLoading, items, error, hasMore };
}
