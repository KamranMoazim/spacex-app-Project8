import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EachCard({EachMissionCardData, indexWorker, handleIndex}) {

  const workerFunction = () => {
    handleIndex(indexWorker)
  }

  const classes = useStyles();


  return (
        <Grid item md={3}>
            <Card className={classes.root}>

              <CardContent>

                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Mission Name: {EachMissionCardData.mission_name}
                  </Typography>

                  <Typography className={classes.pos} color="textSecondary">
                  Mission Year: {EachMissionCardData.launch_year}
                  </Typography>

                  <Typography variant="body2" component="p">
                  Mission ID: {EachMissionCardData.mission_id.length?EachMissionCardData.mission_id:"None"}
                  </Typography>

                  <Typography variant="body2" component="p">
                  Mission Result: {EachMissionCardData.launch_success?"Successful":"Failed"}
                  </Typography>

              </CardContent>

            <CardActions>
                <Button size="large" onClick={workerFunction} >Details</Button>
            </CardActions>

            </Card>
        </Grid>
  );
}
