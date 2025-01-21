import React, { useState } from 'react'
import axios from 'axios';

const Records = () => {
    const [records,setrecords] = useState([]);
    const fetchData = async() => {
        try {
            const randomId = Math.floor(Math.random() * 83) + 1;
            const res = await axios.get(`https://swapi.dev/api/people/${randomId}/`);
            
            console.log(res);
            return res.data;

            
        } catch (error) {
            alert("SOMETHING IS WRONG");
            return null;
            
        }


    }


    const addRandomUser = async() => {
        const user = await fetchData();
        if(user){
            setrecords((prevRecords) => [
                ...prevRecords,
                {id : Date.now(),name:user.name,height:user.height,mass:user.mass},
            ]);
        }


    };

    const DeleteUser = (id) => {
        setrecords((prevRecords) => prevRecords.filter((records) => records.id !==id));


    }

  return (
    <div style={{padding:'20px'}}>
        <h1>USER TABLE</h1>
        <button onClick={addRandomUser}>ADD RECORDS</button>
        <table style={{width:'80%',borderCollapse:"collapse"}}>
            <thread>
                <tr>
                    <th style={{border:'1px solid black',padding:'10px'}}>
                        NAME
                    </th>
                    <th style={{border:'1px solid black',padding:'10px'}}>
                        height
                    </th>
                    <th style={{border:'1px solid black',padding:'10px'}}>
                        Mass
                    </th>
                    <th style={{border:'1px solid black',padding:'10px'}}>
                        Action
                    </th>
                </tr>
            </thread>
            <tbody>
                {records.map((record,index) => (
                    <>
                    <td style={{border:'1px solid black',padding:'10px'}}>{index + 1}</td>
                    <td style={{border:'1px solid black',padding:'10px'}}>{record.name}</td>
                    <td style={{border:'1px solid black',padding:'10px'}}>{record.height}</td>
                    <td style={{border:'1px solid black',padding:'10px'}}>{record.mass}</td>
                    <td style={{border:'1px solid black',padding:'10px'}}></td>
                    <button onClick={() => DeleteUser(record.id)}>DELETE</button>
                    </>

                ))}
            </tbody>
        </table>
        
    </div>
  )
}

export default Records