import React from 'react'
import {useDetailedMissionsInfoQuery} from '../../generated/graphql'
import DetailCard from './DetailCard'


function SingleMissionDetails({index, handleIndex }) {


    const { data, error, loading } = useDetailedMissionsInfoQuery({ variables: { id: index } });

    if(loading){
        return <h1>Loading</h1>
    }

    if(error){
        return <h1>Error</h1>
    }

    
    return (
        <DetailCard data={data} handleIndex={handleIndex} />
    )
}

export default SingleMissionDetails
