import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <>
            <div className="users">
            <Link to = '1'>User 1</Link>
            <Link to = '2'>User 2</Link>
            <Link to = '3'>User 3</Link>
            </div>
            <Outlet />
            <div className="users-btn">
                <button type="button" onClick = { () => setSearchParams({filter: 'active'})}>Active Users</button>
                <button type="button" onClick = { () => setSearchParams({})}>Filter Users</button>
            </div>
            <div className="show-users">
                {showActiveUsers ? (
                    <h2>Showing Active Users</h2>
                ) :
                    (<h2>Showing All Users</h2>
                )}
            </div>
        </>
    )
}

export default Users;