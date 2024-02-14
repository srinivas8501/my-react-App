import { useRouteError } from "react-router-dom";
const ErrorComp = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div className="error">
            <h1>{error.status} - {error.statusText}</h1>
            <h3>{error.data}</h3>
        </div>
    )
};
export default ErrorComp;