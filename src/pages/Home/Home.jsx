import React, { useContext, useEffect, useState } from 'react'
import DeletedSelected from '../../components/DeleteSelected/DeletedSelected'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search'
import Table from '../../components/Table/Table'
import { funSuccessUsers, GET_USERS_ERROR, GET_USERS_LOADING } from '../../context/actionCreators'
import { AppContext } from '../../context/AppContext'
import { getUsersData } from '../../utils/api'
import styles from './Home.module.css'
const Home = () => {
    const { state, dispatch } = useContext(AppContext);
    useEffect(() => {
        dispatch(GET_USERS_LOADING);
        getUsersData().then((res) => {
            dispatch(funSuccessUsers(res));
        }).catch((err) => {
            dispatch(GET_USERS_ERROR)
            console.log(err)
        })
    }, []);
    return (
        <div>
            <Search />
            <Table />
            <div className={styles.footerContainer}>
                <DeletedSelected />
                <Pagination />
            </div>
        </div>
    )
}

export default Home