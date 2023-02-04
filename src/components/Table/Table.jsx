import React, { useContext } from 'react'
import Tbody from './Tbody'
import Thead from './Thead'
import styles from './Table.module.css';
import { AppContext } from '../../context/AppContext';
const Table = () => {
    const { state } = useContext(AppContext);
    const { pageData } = state;
    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <Thead />
                </thead>
                <tbody>
                    {
                        pageData?.map((el,i) => <Tbody index={i} key={el.id} id={el.id} role={el.role} email={el.email} name={el.name} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table