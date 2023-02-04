import React, { useContext, useState } from 'react';
import { DeleteIcon, EditIcon } from '../../assets/icons/icons';
import { funSuccessUsers } from '../../context/actionCreators';
import { AppContext } from '../../context/AppContext';
import styles from './Table.module.css';
const Tbody = React.memo(function Tbody({ name, email, role, id, index }) {
    const [editable, setEditable] = useState(true);
    const [info, setInfo] = useState({ name, email, role });
    const [selectD, setSelectD] = useState(false);
    const { deleteSingleRow, ids, setIds, selectAll } = useContext(AppContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        });
    };
    const handleSelect = () => {
        setSelectD(!selectD);
        if (!selectD) {
            let check = ids.indexOf(id);
            if (check == -1) {
                setIds([...ids, id]);
            } else {
                console.log('already', ids)
            }
        } else {
            let filtered = ids.filter((el) => el !== id);
            setIds([...filtered]);
        }
    };
    return (
        <>
            <tr>
                <td>
                    <span className={styles.select} >
                        <input type="checkbox" checked={selectAll.length ? id >= selectAll[0].id && id <= selectAll[selectAll.length - 1] : selectD} onChange={handleSelect} />
                    </span>
                </td>
                <td><input type="text" onChange={handleChange} name='name' value={info.name} readOnly={editable} /></td>
                <td><input type="text" onChange={handleChange} name='email' value={info.email} readOnly={editable} /></td>
                <td><input type="text" onChange={handleChange} name='role' value={info.role} readOnly={editable} /></td>
                <td>
                    <div>
                        <span className={styles.edit} onClick={() => setEditable(!editable)}>
                            {
                                editable ? EditIcon : <span>☑️</span>
                            }

                        </span>
                        <span className={styles.delete} onClick={() => deleteSingleRow(id)}>
                            {DeleteIcon}
                        </span>
                    </div>
                </td>
            </tr>
        </>
    )
}
)

export default Tbody