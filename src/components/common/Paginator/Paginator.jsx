import React, {useState} from "react";
import styles from './Paginator.module.css';

let Paginator = (props) => {

    let [paginatorPos, setPaginatorPos] = useState(0);
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) + paginatorPos;
    let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    for (let i = 1 + paginatorPos; i <= pagesCount; i++) {
        pages.push(i);
    }

    const next = () => {
        setPaginatorPos(p => p + 10)
    }

    const prev = () => {
        setPaginatorPos(p => p - 10)
    }

    return <div className={styles.pagination}>
        {paginatorPos ? <button onClick={prev}> Prev </button> : null}
        {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                         onClick={() => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
        <button onClick={next}> Next</button>
    </div>


}


export default Paginator;