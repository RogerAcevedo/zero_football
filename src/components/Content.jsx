import React, {useState, useEffect} from 'react'
import axios from 'axios';


const Content = () => {

    // ! STATE
    const [data, setData] = useState([]);

    // ! useEffect
    useEffect(() => {
        axios({
            method: "GET",
            // view_count: 12,
            url: `https://www.scorebat.com/video-api/v3/feed/?token=NjE1NDVfMTY3NzE2NzQ4NV9lM2E3ZjdiYjY2NzJkNTMzZmQzNzQwNmE5N2Q2NGQ4YzVlNTQwZTI0`
        }).then( res => {
            console.log(res.data);
            // GET RESPONSE FROM API with state
            setData(res.data.response);
        }).catch(e=>console.log(e))
    },[])
    // [] <- comoponent mounted to DOM for first time. need to provide empty dependcy list


  return (

    
    <div className='content-container'>
        {data.map((item) => (
            <div className='displayDiv' key={item.title} onClick={() => window.open(item.matchviewUrl)}>

                <div className='displayHeader' >
                    <h5>{item.title}</h5>
                </div>

                <div className='displayImage'>
                    <img src={item.thumbnail} alt="#" />
                </div>
            </div>
        ))}

        
    </div>
  )
//   CLOSING BRACKET
}

export default Content