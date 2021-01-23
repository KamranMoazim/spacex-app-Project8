import gql from 'graphql-tag';


export const AllMissionsInfo = gql`
query AllMissionsInfo {
    launches {
      mission_name
      mission_id
      launch_success
      launch_year
    }
}`