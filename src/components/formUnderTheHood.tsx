import React,{useState, useEffect} from 'react'
import '../App.css';

const FormUnderTheHood = ({}:any) => {

    
    return (
        <>
            <form method='POST' action='https://jsonplaceholder.typicode.com/posts'>
                <label htmlFor="query">Query</label>
                <input type="text" id='query' name='query'  />
                <button type='submit' >Submit</button>
            </form>
        </>
    )
}

export default FormUnderTheHood;
