import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    page: {
      padding: theme.spacing(8)  
    },
    root: {
      flexGrow: 1,
      height: "100%",
    }
  }));

function Home(){
    const classes = useStyles();
    return(
        <div className={classes.page}>
            <Grid container spacing={4}>
                <Grid item xs={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="HR Picture"
                                image="hr_pic.jpg"
                                title="HR Picture"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" align="center">
                                    Human Resource
                                </Typography>
                                <Typography color="textSecondary" align="center" paragraph>
                                    Хүний нөөцийн удирдлагын систем
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="HR Picture"
                                image="helpdesk.jpg"
                                title="HR Picture"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" align="center">
                                    HelpDesk
                                </Typography>
                                <Typography color="textSecondary" align="center" paragraph>
                                    Тусламжийн төв, Програмын эрхийн хүсэлт
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;