import { useState, useEffect } from 'react';
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import { fetchUsers, addNewUser, deleteUser } from '../../Redux/actions/usersAction';
import { connect, useDispatch, useSelector } from 'react-redux';
import './users.scss'

const Users = () => {
    const userData = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    
    const {url, path} = useRouteMatch();
    
    const User = () => {
        const {id} = useParams();       
        return (
            <div>                
                {`User ID: ${id}`}               
            </div>
        )
    }
    
    const deleteUserItem = (id) => {
        dispatch(deleteUser(id))  
    }    

    const addUser = () => {
        dispatch(addNewUser(value))
        setValue("");
    }

    return (
        <>
            <div className="input-field">
                <input type="text" value={value} onChange={(event)=>setValue(event.target.value)}/>
                <button onClick={() => addUser()}>Add user</button>
            </div>
            <div className='users'>                            
                <div className='users-list'>         
                    {userData.users.map(user => 
                        <div className='user-li'>
                            <Link className="user-name" to={`${url}/${user.id}`}>{user.name}</Link>                         
                            <span onClick={() => deleteUserItem(user.id)} className="delete-item">[X]</span>
                        </div>)
                    }
                </div>
                <div>
                    <Route path={`${url}/:id`}>
                        <h1>Info about each user</h1>
                        <User />
                    </Route>
                </div>

            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        userData: state.users    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default Users;