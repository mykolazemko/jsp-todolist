import { useState, useEffect } from 'react';
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import './users.scss'

const Users = () => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
         async function fetchUsersList() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(usersData => usersData.json())
            .then(json => setUsersList(json))
        }
        fetchUsersList()
    }, []);

    
    const {url, path} = useRouteMatch();
    
    const User = () => {
        const {id} = useParams();
        console.log(useParams())
        return (
            <div>{id}
            {console.log(id)}</div>
        )
    }
    // const deleteTodo = () => setUsersList(usersList.filter(user => user.id !== id))
    const deleteTodo = (id) => setUsersList(usersList.filter(user=>user.id !== id))
    
    return (
        <div className='users'>
            <div className='users-list'>
                {usersList.map(user => 
                    <div className='user-li'>
                        <Link className="user-name" to={`${url}/${user.id}`}>{user.name}</Link>
                        <span onClick={() => deleteTodo(user.id)} className="delete-item">[X]</span>
                    </div>)}
            </div>
            <div>
                <Route path={`${url}/:id`}>
                    <h1>Info about each user</h1>
                     <User />
                </Route>
            </div>

        </div>
    )
}
export default Users