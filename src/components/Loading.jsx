import useJsonFetch from "../useJsonFetch";

function Loading() {
    const url = import.meta.env.VITE_API_URL;
    const { loading } = useJsonFetch(`${url}/loading`);
    console.log(loading);

    return (
        (loading && <div className="block-loading">Loading...</div>)
    )
}

export default Loading;