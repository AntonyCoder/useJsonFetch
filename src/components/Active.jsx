import useJsonFetch from "../useJsonFetch";

function Active(){
    const url = import.meta.env.VITE_API_URL;
    const {data} = useJsonFetch(`${url}/data`);

    return(
        <div className="block-active">ok</div>
    )
}

export default Active;