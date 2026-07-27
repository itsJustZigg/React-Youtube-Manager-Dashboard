import { Link } from "react-router-dom";

export default function PageNotFound(){
    return(
        <main className="pageNotFound">
        <h1>Sorry, this page was not found</h1>
        <Link to={"/home"}>
            <button>Go Back to Home</button>
        </Link>
        </main>
    )
}