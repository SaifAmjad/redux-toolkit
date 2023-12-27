import React, { useEffect, useState } from 'react';
import { fetchDragons} from '../redux/slices/dragonSlice';
import {useSelector,useDispatch} from 'react-redux';


const MyProfile = () => {

    const dragons=useSelector((state)=>{
        return state.dragon.data
    })

    const missions=useSelector((state)=>{
      return state.mission.data;
    })

    
  return (
    <div>
      <h1>My Rockets</h1>
      <ul>
        {
          dragons.map((ele)=>{
            
              if(ele.reserve){
                return <li>{ele.name}</li>
              }
            
          })
        }
      </ul>

      <h1>My Missions</h1>
      {
          missions.map((ele)=>{
            
              if(ele.join){
                return <li>{ele.mission_name}</li>
              }
            
          })
        }
    </div>
  )
}

export default MyProfile
