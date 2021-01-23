import React from 'react'
import {useAllMissionsInfoQuery} from '../../generated/graphql'
import EachMissionCard from './EachMissionCard'
import {AllMissionsInfoQuery} from '../../generated/graphql'


interface Props {
    data: AllMissionsInfoQuery;
  }

function AllMissions() {

    const { data }: React.FC<Props> = useAllMissionsInfoQuery();   //  error, loading

    // var data1:AllMissionsInfoQuery = data

    // if(loading){
    //     return <h1>Loading</h1>
    // }

    // if(error){
    //     return <h1>Error</h1>
    // }

    
    return (
        <div>
            <h1>SpaceX</h1>
            <EachMissionCard data={data} />
        </div>
    )
}

export default AllMissions
