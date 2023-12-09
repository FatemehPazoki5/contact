import React from 'react';
import styles from './addContact.module.css'
function addContact({datas,deletHandler}) {
    

    return (
        <div className={styles.container}>
            <ul  className={styles.contacts}>
                {datas.map(data=>(
                
                <li key={data.number}>
                    <p>{data.name}</p>
                    <p>{data.lastName}</p>
                    <p>{data.email}</p>
                    <p>{data.number}</p>
                    <button onClick={()=>deletHandler(data.number)}>delet</button>
                </li>
                ))}   
            </ul>
        </div>
    );
}

export default addContact;