import React from 'react'
import {useAllMissionsInfoQuery} from '../../generated/graphql'
import EachMissionCard from './EachMissionCard'
// import { AllMissionsInfoQueryHookResult} from '../../generated/graphql'


// interface Props {
//     data: AllMissionsInfoQueryVariables;    //AllMissionsInfoQuery    //AllMissionsInfoQueryVariables
//     error: Error,
//     loading: any
//   }

function AllMissions() {

    const { data, error, loading } = useAllMissionsInfoQuery();
    // const { data, error, loading }: AllMissionsInfoQueryHookResult = useAllMissionsInfoQuery();


    // const { data, error, loading }: React.FC<AllMissionsInfoQuery, <{ [key: string]: never; }>,> = useAllMissionsInfoQuery();
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
