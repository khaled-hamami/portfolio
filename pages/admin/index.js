import Router from "next/router";
import { useEffect } from "react";

export default function Admin() {
    
    
    useEffect(() => {
        if (!Boolean(localStorage.getItem("token"))) {
            Router.push("/admin/login");
        }
    }, []);

    return <>

    </>
}
