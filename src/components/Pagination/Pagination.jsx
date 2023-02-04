import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { FirstPageIcon, LastPageIcon, NextIcon, PreviousIcon } from '../../assets/icons/icons';
import { funAddSuccessPageData } from '../../context/actionCreators';
import { AppContext } from '../../context/AppContext';
import styles from './Pagination.module.css';
const Pagination = () => {
    const { state, dispatch } = useContext(AppContext);
    const { data } = state;
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);

    //-----this will take last index from everypage of data-----
    const indexOfLast = currentPage * dataPerPage;
    //-----this will take first index from everypage of data-----
    const indexOfFirst = indexOfLast - dataPerPage;

    //-----current array of data-----
    const currentData = useMemo(() => {
        return data.slice(indexOfFirst, indexOfLast);
    }, [data, currentPage]);

    useEffect(() => {
        dispatch(funAddSuccessPageData(currentData));
    }, [currentData, currentPage])

    //-----dynamic buttons-----
    const buttons = new Array(Math.ceil(data.length / dataPerPage)).fill(0);

    //-----handlePage with next and previous-----
    const handlePageNP = (value) => {
        setCurrentPage((prev) => prev + value);
    };

    //-----handlePage with values-----
    const handlePageV = (value) => {
        setCurrentPage(value)
    }
    return (
        <div className={styles.Pcontainer}>
            <button onClick={() => handlePageV(1)} className={styles.icons} disabled={currentPage === 1}>
                {FirstPageIcon}
            </button>
            <button onClick={() => handlePageNP(-1)} disabled={currentPage === 1} className={styles.icons}>
                {PreviousIcon}
            </button>
            {
                buttons?.map((el, i) => {
                    if (i + 1 == currentPage) {
                        return <button key={i} className={styles.active}>{i + 1}</button>
                    } else {
                        return <button onClick={() => handlePageV(i + 1)} key={i}>{i + 1}</button>
                    }
                })
            }
            <button onClick={() => handlePageNP(+1)} className={styles.icons} disabled={currentPage === Math.ceil(data.length / dataPerPage)}>
                {NextIcon}
            </button>
            <button className={styles.icons} onClick={() => handlePageV(Math.ceil(data.length / dataPerPage))} disabled={currentPage === Math.ceil(data.length / dataPerPage)} >
                {LastPageIcon}
            </button>
        </div>
    )
}

export default Pagination