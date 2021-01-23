import React from 'react'
import {useAllMissionsInfoQuery} from '../../generated/graphql'
import EachMissionCard from './EachMissionCard'
import { AllMissionsInfoQueryVariables} from '../../generated/graphql'


interface Props {
    data: AllMissionsInfoQueryVariables;    //AllMissionsInfoQuery
    error: Error,
    loading: any
  }

function AllMissions() {

    const { data, error, loading }: React.FC<Props> = useAllMissionsInfoQuery();
    // const { data, error, loading }: <AllMissionsInfoQuery, Exact<{ [key: string]: never; }>> = useAllMissionsInfoQuery(); 

    if(loading){
        return <h1>Loading</h1>
    }

    if(error){
        return <h1>Error</h1>
    }

    
    return (
        <div>
            <h1>SpaceX</h1>
            <EachMissionCard data={data} />
        </div>
    )
}

export default AllMissions
