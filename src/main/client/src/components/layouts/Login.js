import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { login } from '../../actions/auth';

  
  // const useStyles = makeStyles((theme) => ({
  //   paper: {
  //     marginTop: theme.spacing(15),
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     width: theme.spacing(50),
  //     height: theme.spacing(20),
  //   },
  //   form: {
  //     width: '100%', // Fix IE 11 issue.
  //     marginTop: theme.spacing(1),
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2),
  //   },
  // }));
  const logo = {
    width: 300,
    height: 200,
  };
  const form = {
    width: '100%', // Fix IE 11 issue.
    marginTop: 3,
  };
  const paper = {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  };

  
class Login extends Component {
  constructor() {
      super()
      this.state = {
          email: '',
          password: '',
          errors: {}
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
      e.preventDefault()

      const user = {
          email: this.state.email,
          password: this.state.password
      }

      login(user).then(res => {
          if (res) {
              this.props.history.push(`/home`)
              console.log("Result:" + res);
          }
          else {
            console.log("Result:" + res);
          }
      })
  }
  
  render(){
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={paper}>
          <Avatar variant="rounded"  style={logo} src="login-logo.png">
          </Avatar>
          <form  noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={this.state.email}
              onChange={this.onChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.onChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
              LuciERP
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    );
  }
}
export default Login;

