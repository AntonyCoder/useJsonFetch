import useJsonFetch from "../useJsonFetch";

function Error() {
    const url = import.meta.env.VITE_API_URL;
    const { error } = useJsonFetch(`${url}/error`);

    return (
        (error && <div className="block-error">{error}</div>)
    )
}

export default Error;