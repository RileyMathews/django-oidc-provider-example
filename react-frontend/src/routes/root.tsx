import { Link, Outlet } from "@tanstack/react-router";


export default function Root() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>home</Link>
                    </li>
                    <li>
                        <Link to={`/public`}>public</Link>
                    </li>
                    <li>
                        <Link to={`/private`}>private</Link>
                    </li>
                    <li>
                        <Link to={`/login`}>login</Link>
                    </li>
                    <li>
                        <Link to={`/logout`}>logout</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
