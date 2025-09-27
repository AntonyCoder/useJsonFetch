import useJsonFetch from "../useJsonFetch";

function Active(){
    const url = import.meta.env.VITE_API_URL;
    const {data} = useJsonFetch(`${url}/data`);

    return(
        (data && <div className="block-active">{data.status}</div>)
    )
}

export default Active;