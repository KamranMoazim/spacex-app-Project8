import React from 'react'
import {DetailedMissionsInfoQuery} from '../../generated/graphql'

interface Props {
    data: DetailedMissionsInfoQuery;
  }


const DetailCard: React.FC<Props> = ({data, handleIndex}) => {
  
    const {launch} = data

    return (
        <div>
            <h1>{launch.mission_name}</h1>
            <h3>{launch.launch_success}</h3>
            <h3>{launch.launch_year}</h3>
            <h3>{launch.rocket.rocket_name}</h3>
            <h3>{launch.details}</h3>
            <h3>{launch.launch_site.site_name}</h3>
            {launch.links.flickr_images.map((image)=>{
                return <img src={image} height={300} style={{margin:"10px"}} />
            })}
            <br/>
            <button onClick={handleIndex}>back</button>
        </div>
    )
}

export default DetailCard
