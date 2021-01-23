import React, {useState} from 'react'
import {AllMissionsInfoQuery} from '../../generated/graphql'
import EachCard from './Card'
import Grid from '@material-ui/core/Grid';
import SingleMissionDetails from '../SingleMissionDetails/SingleMissionDetails'

interface Props {
    data: AllMissionsInfoQuery | undefined;
  }


const EachMissionCard: React.FC<Props> = ({data}) => {

 
    let [indexI, setIndex] = useState("1")
    let [i, setI] = useState(false)

    const handleIndex = (receivedIndex) =>{
        setIndex(receivedIndex.toString())
        setI(true)
    }

    const handleIndex2 = () =>{
        setI(false)
    }

    const {launches} = data

    if(i) {
        return <SingleMissionDetails index={indexI} handleIndex={handleIndex2} />
    }
    else {
        return (
        <Grid container spacing={7} direction="row" justify="flex-start" alignItems="flex-start" >
           {launches.map( (_ ,index) => { 
               return <EachCard EachMissionCardData={launches[index]} handleIndex={handleIndex} indexWorker={index} key={index} />
           })}
        </Grid>
    )
  }
}

export default EachMissionCard
