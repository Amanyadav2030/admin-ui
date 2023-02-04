import React, { useContext, useState } from 'react'
import { funSuccessUsers } from '../../context/actionCreators';
import { AppContext } from '../../context/AppContext';
import { getUsersData } from '../../utils/api';
import styles from './Search.module.css'
const Search = () => {
    const [search, setSearch] = useState('');
    const { dispatch } = useContext(AppContext);

   //-----this will search by role, name or email-----
    const handleChange = async (e) => {
        setSearch(e.target.value);
        let users = await getUsersData();
        if (search === '') {
            dispatch(funSuccessUsers(users));
        } else {
            let filtered = users?.filter((el) => el.name.toLowerCase().startsWith(search.toLowerCase()) || el.email.toLowerCase().startsWith(search.toLowerCase()) || el.role.toLowerCase().startsWith(search.toLowerCase()));
            dispatch(funSuccessUsers(filtered));
        }
    }
    return (
        <div className={styles.search}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" onInput={handleChange} placeholder='Search by name, email or role' />
            </form>
        </div>
    )
}

export default Search