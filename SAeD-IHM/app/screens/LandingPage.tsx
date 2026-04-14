import { Navigate, useNavigate } from "react-router";

export default function LandingPage() {
    let navigate = useNavigate()


    document.addEventListener("onLoad", () => {
        const port = localStorage.getItem("port");
        console.log(port);

        if (port == null || port == "0000") {
            navigate("/");
        }
    })

    return(
        <>
        </>
    )
}