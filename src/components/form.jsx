import React, { useState } from 'react';
import styles from './form.module.css';
import AddContact from './addContact';
function form(props) {
    const inputs=[{
    name:"name",type:"text",id:"1"},
    {name:"lastName",type:"text",id:"2"},
    {name:"email",type:"email",id:"3"},
    {name:"number",type:"number",id:"4"}
]
    const [datas,setDatas]=useState([]);
    const [alert,setAlert]=useState("");
    const[data,setData]=useState({
        name:"",
        lastName:"",
        email:"",
        number:""
    })
    const buttonHanler=(event)=>{
        event.preventDefault();
        if(!data.email ||!data.name || !data.lastName || !data.number){
        setAlert("please enter valid data")
        return;
    }
        else setAlert("")

        setDatas((datas)=>[...datas,data]);
        console.log(datas)
        setData({
        name:"",
        lastName:"",
        email:"",
        number:""
    })
        console.log({data})
    }
    const changeHandler=(event)=>{
        console.log(event.target.value);
        setData((data)=>({...data,[event.target.name]:event.target.value}));
    }
    const deletHandler=(num)=>{
        const newDatas=datas.filter((data)=>data.number != num );
        setDatas(newDatas);
    }
    return (
        <div >
        <div className={styles.header} >
            <h1>contact App</h1>
            <p>welcome to my app</p>        
        </div>    
        <div className={styles.container} >
            <form action=""  className={styles.form}>
                {inputs.map(input => (<input  key={input.id} type={input.type}  name={input.name} value={data[input.name]} placeholder={input.name} onChange={changeHandler} />))}
                <br />
                <button onClick={buttonHanler}>send</button>
            </form>
        </div>
        <div className={styles.alert}>
            {alert && <p >{alert}</p> }
        </div>
        <h2 className={styles.contactTitle}>contact list</h2>
        {
            datas.length?<AddContact datas={datas} deletHandler={deletHandler}/>:<p className={styles.mesage}>no cantact yet</p>
        }
        
        </div>
    );
}

export default form;