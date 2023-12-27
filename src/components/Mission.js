import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {fetchMissions,updateMission} from '../redux/slices/missionSlice'


const Mission = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchMissions());
  },[dispatch]);

  const missions=useSelector((state)=>{
    return state.mission.data;
  })

  console.log(missions)

  const updateState=(id)=>{
    dispatch(updateMission(id));

  }

  
  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {
          missions.map((ele)=>{
            return(
              <li>
                <h3>Id:</h3> {ele.mission_id}
                <h3>Name:</h3> {ele.mission_name} 
                <h3>Description:</h3> {ele.description} <br />
                <button onClick={()=>{updateState(ele.mission_id)}}> {ele.join?'Leave Mission':'Join Mission'}</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Mission
