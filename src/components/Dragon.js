import React, { useEffect } from 'react'
import { fetchDragons ,updateReserve} from '../redux/slices/dragonSlice';
import{useDispatch,useSelector} from 'react-redux'

const Dragon = () => {

    const dispatch=useDispatch();

    useEffect(()=>{
        
        dispatch(fetchDragons());
      
    },[])
    
    const dragons=useSelector((state)=>{
        return state.dragon.data
    })

    const updateState=(ele)=>{
      dispatch(updateReserve(ele.id));
    }


  return (
    <div>
      <h1>Dragons List</h1>
      <ul>
        {
            dragons.map((ele)=>{
                return(
                    <li>
                    Id: {ele.id} <br />
                    Name: {ele.name} <br />
                    Type: {ele.type} <br />
                    <img style={{width:'20%'}} src={ele.flickr_images} alt="" />
                    <button onClick={()=>{updateState(ele)}}>{ele.reserve?'Cancel reservation':'Reserve dragon'}</button>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Dragon
