import gql from 'graphql-tag';


export const DetailedMissionsInfo = gql`
query DetailedMissionsInfo($id: String!) {
    launch(id: $id) {
        mission_id
        mission_name
        launch_success
        launch_year
        details
        rocket {
            rocket_name
        }
        launch_site {
            site_name
        }
        links {
        flickr_images
        }
    }
  }
  `


