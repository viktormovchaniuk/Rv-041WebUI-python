import React from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import 'typeface-roboto';

const styles = theme => ({
  form: {
    marginTop: 50,
  },
  cardBody: {
    padding: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      serverResponse: false,
      errors: false
    };
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid container justify='center' className={classes.form}>
        <Card className={classes.cardBody}>
          <Typography variant="h4" align='center'>
            Create your account
          </Typography>
          <form>
            <Grid container direction='column' alignContent='center'>
              <CardContent>
                <Grid item>
                  <TextField
                    required
                    label="Name"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    name="name"
                  />
                  <TextField
                    required
                    label="Email"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    name="email"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    label="Password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                    name="password"
                  />
                  <TextField
                    required
                    label="Confirm password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                  />
                </Grid>
              </CardContent>
              <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Create an account
              </Button>
            </Grid>
          </form>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUpForm);