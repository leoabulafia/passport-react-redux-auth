import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    width: '100%'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  button: {
    borderRadius: '2px',
    margin: 10,
    minWidth: 120
  },
  chip: {
    margin: 10,
  },
});

function LandingCards(props) {
    const values = [
      { key: 0, avatar: 'R', label: 'React' },
      { key: 1, avatar: 'RX', label: 'Redux' },
      { key: 2, avatar: 'RR', label: 'React Router' },
      { key: 10, avatar: 'PS', label: 'PassportJS' },
      { key: 3, avatar: 'ND', label: 'Node.js' },
      { key: 4, avatar: 'EX', label: 'Express' },
      { key: 5, avatar: 'M', label: 'MongoDB' },
      { key: 6, avatar: 'MG', label: 'Mongoose' },
      { key: 7, avatar: 'SG', label: 'Sendgrid' },
      { key: 8, avatar: 'UI', label: 'Material UI' },
      { key: 9, avatar: 'RF', label: 'Redux Form' },
    ];

  const { classes } = props;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Grid container className={classes.demo} justify="center" spacing={8}>
          <Grid item xs={12}>
            <Card className={classes.card} style={{ background: '#4267b2' }}>
              <CardContent>
                <Typography
                  variant="headline"
                  component="h2"
                  color="inherit"
                  className={classes.pos}
                >
                  Features
                </Typography>

                <Typography
                  color="inherit"
                  component="p"
                  style={{ marginBottom: '10px' }}
                >
                  This is an example of using React and Redux
                  alongside PassportJS for authentication.
                  All the routing is handled by React Router.
                </Typography>
                <Typography
                  color="inherit"
                  component="p"
                  style={{ marginBottom: '10px' }}
                >
                  This demo uses MongoDB and Mongoose to store data and object modeling.
                  Sendgrid's Node.js library manages email sending.
                </Typography>
                <Typography
                  color="inherit"
                  component="p"
                  style={{ marginBottom: '10px' }}
                >
                  The backend is Express with NodeJS and Material-ui implements a
                  basic frontend layout.                 Other relevant libraries used are Redux Form, bcrypt for hashing passwords and cookie-session to store sessions.

                </Typography>

              </CardContent>
            </Card>


        </Grid>


        <Grid container item spacing={8} alignItems="stretch">
          <Grid item md={6} xs={12} >
            <Card className={classes.card} style={{ background: '#ff6f60', height: '100%' }}>
              <CardContent>
                <Typography
                  variant="headline"
                  component="h2"
                  className={classes.pos}
                >
                  Tech stack:
                </Typography>

                <Grid>
                  <div className={classes.demo}>
                    {values.map(val => {
                      return (
                        <Chip
                          avatar={<Avatar>{val.avatar}</Avatar>}
                          key={val.key}
                          label={val.label}
                          className={classes.chip}
                          />
                      )
                    })}
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h2">
                  Try demo
                </Typography>
                <Typography component="p" style={{ marginBottom: '10px' }}>
                  You can logging in with Google or Facebook.
                </Typography>
                <Typography component="p" style={{ marginBottom: '10px' }}>
                  You can also create a new account with your email and password.
                  In this case an email confirmation will be sent.
                </Typography>
                <Typography component="p" style={{ marginBottom: '10px' }}>
                  You’ll be able to modify your password later or recover your
                  account in case you forget it.
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                <Button
                  component={Link}
                  to="/signin"
                  className={classes.button}
                  variant="raised"
                  color="primary"
                  type="submit"
                >
                  Log in
                </Button>
                <Button
                  component={Link}
                  to="createaccount"
                  className={classes.button}
                  variant="raised"
                  color="secondary"
                  type="submit"
                >
                  Sign up
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(LandingCards);
