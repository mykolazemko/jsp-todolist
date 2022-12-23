import { useState, useEffect } from 'react';
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import { fetchUsers, addNewUser, deleteUser } from '../../Redux/actions/usersAction';
import { connect, useDispatch, useSelector } from 'react-redux';
import './users.scss'
import keys from 'webdriverio/build/commands/browser/keys';

const Users = () => {
    const userData = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [filteredValue, setFilteredValue] = useState({})
    console.log(filteredValue);
    const tableColumns = [
        {
            key: "name",
            value: "Name"
        },
        {
            key: "userName",
            value: "User Name"
        },
        {
            key: "email",
            value: "Email"
        },
        {
            key: "phone",
            value: "Phone"
        },
    ]

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const { url, path } = useRouteMatch();

    const User = () => {
        const { id } = useParams();
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
    console.log(userData.users);
    return (
        <>
            <div className="input-field">
                <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
                <button onClick={() => addUser()}>Add user</button>
            </div>
            <div className='users'>
                <div className='users-list'>
                    <table>
                        <tr className='user-li'>
                            {tableColumns.map(t =>
                                <>
                                    <th>
                                        {t.value}
                                        <input
                                            type="text"
                                            className="filter-input"
                                            onChange={e => setFilteredValue({ [t.key]: e.target.value })} />
                                    </th>
                                </>

                            )}
                        </tr>
                        {userData.users
                            // .filter(user => {
                            //     let key
                            //     if (filteredValue != {}) {
                            //         key = Object.keys(filteredValue);
                            //     }
                            //     console.log(key);
                            //     return user.key?.includes(filteredValue.key)
                            // })
                            .map(user =>
                                <tr className='user-li'>
                                    <td>
                                        <Link className="user-name" to={`${url}/${user.id}`}>{user.name}</Link>
                                    </td>
                                    <td>
                                        <span>{user.username}</span>
                                    </td>
                                    <td>
                                        <span>{user.email}</span>
                                    </td>
                                    <td>
                                        <span>{user.phone}</span>
                                    </td>
                                    <td>
                                        <span onClick={() => deleteUserItem(user.id)} className="delete-item">[X]</span>
                                    </td>
                                </tr>)
                        }
                    </table>
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