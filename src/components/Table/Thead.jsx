import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import styles from './Table.module.css';
const Thead = () => {
    const { setSelectAll, selectAll, state } = useContext(AppContext);
    const { pageData } = state;
    const handleSelectAll = () => {
        setSelectAll(selectAll.length ? [] : pageData);
    }
    return (
        <>
            <tr>
                <th>
                    <span className={styles.select} >
                        <input type="checkbox" checked={selectAll.length} onChange={handleSelectAll} />
                    </span>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
        </>
    )
}

export default Thead