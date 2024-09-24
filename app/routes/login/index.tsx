import { Link, Outlet } from "@remix-run/react";

export default function login(){
    return (
        <div>
            <h1>
                Welcome to Login page
            </h1>
            <Link to='nested'> Show nested</Link>
            <div style={{backgroundColor:'red'}}>
                <Outlet/>
            </div>
        </div>
    )
}