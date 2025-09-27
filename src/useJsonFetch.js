import { useState, useEffect } from "react";

function useJsonFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        let isMounted = true;

        async function fetchData() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);

                if(!response.ok){
                    throw new Error(`Ошибка: ${response.status}`)
                }
                const data = await response.json()
                if (isMounted) setData(data);
            } catch (err){
                if (isMounted) setError(err.message)
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        }
    }, [url])

    return {data, loading, error};
}

export default useJsonFetch;