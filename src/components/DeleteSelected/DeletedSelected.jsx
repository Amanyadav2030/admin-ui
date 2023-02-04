import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import styles from './DeletedSelected.module.css';
const DeletedSelected = () => {
    const { deleteMultiPleRow } = useContext(AppContext);
    return (
        <button onClick={deleteMultiPleRow} className={styles.btn}>Delete Selected</button>
    )
}

export default DeletedSelected