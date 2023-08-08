//TUTORIAL
//https://academind.com/tutorials/sending-an-email-with-react-and-cloud-functions#calling-the-cloud-function-from-the-react-app
//npm i @mui/material

import { useState } from 'react';
import './ContactForm.css';

//Material UI components and functions
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function ContactForm() {

//theme for input fields' font style
  const theme = createTheme({
      typography: {
        fontFamily: [
          '"Questrial"',
          'sans-serif',
        ].join(','),
      },});

  //define states and state functions. Values set to false by default.
  const [error, setError] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  //the form is an object, with nested objects inside that represent the input fields
  const [contactForm, setContactForm] = useState({
    name: {
      value: '',
      variant: 'standard',
      width: '100%',
      elementConfig: {
        required: true,
        id: 'contact-name',
        label: 'Your Name'
      },
      validation: {
        required: true,
        errorMessage: 'Please enter your name',
      },
      valid: false,
      blur: false,
    },

    email: {
      value: '',
      variant: 'standard',
      width: '100%',
      elementConfig: {
        required: true,
        id: 'contact-email',
        label: 'Your Email',
      },
      validation: {
        required: true,
        isEmail: true,
        errorMessage: 'Please enter your email',
      },
      valid: false,
      blur: false,
    },

    message: {
      value: '',
      variant: 'standard',
      width: '100%',
      elementConfig: {
        required: true,
        id: 'contact-message',
        label: 'Your Message',
        multiline: true,
        rows: 4
      },
      validation: {
        required: true,
        errorMessage: 'Please enter your message',
      },
      valid: false,
      blur: false,
    },

    //honeypot field isn't rendered to DOM, confuses bots that fill it automatically
    honeypot: {
      value: '',
      display: 'none',
      elementConfig: {
        className: "honeypot",
        label:
          'If you are a human, do not type anything here. I am here to fool bots',
      },
      //This validation property is added just to avoid errors when running checkValidity();
      validation: {},
      //this input is valid by default to allow 'Send' action
      valid: true,
      blur: false,
    },
  });

  //converts the contactForm object into an array
  const formElementsArray = [];
  for (let key in contactForm) {
    formElementsArray.push({
      id: key,
      ...contactForm[key],
    });
  }

  //map the array to return an array of JSX elements
  //sx prop allows styling of input fields
  const formElements = formElementsArray.map((element) => {
    return (
      <Box key={element.id}>
        <ThemeProvider theme={theme}>
        <TextField
         sx={{ display: element.display, width: element.width }}
          {...element.elementConfig}
          error={!element.valid && element.blur}
          helperText={
            !element.valid && element.blur
              ? element.validation.errorMessage
              : null
          }
          variant={element.variant}
          onChange={(event) => inputChangedHandler(event, element.id)}
          onBlur={(event) => inputChangedHandler(event, element.id)}
          value={element.value}
        ></TextField>
        </ThemeProvider>
      </Box>
    );
  });

  //this function runs when an input changes or is blurred
  const inputChangedHandler = (event, inputIdentifier) => {
    //create a new object representing the input that was changed or blurred
    const updatedFormElement = {
      ...contactForm[inputIdentifier],
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        contactForm[inputIdentifier].validation
      ),
      blur: event.type === 'blur' ? true : false,
      touched: true,
    };

    //create a new object represeting the whole form object
    const updatedContactForm = {
      ...contactForm,
      [inputIdentifier]: updatedFormElement,
    };

    //the whole form is valid until it checks its input fields
    let formIsValid = true;
    for (let inputElementIdentifier in updatedContactForm) {
      formIsValid =
        updatedContactForm[inputElementIdentifier].valid && formIsValid;
    }

    //update contactForm state
    setContactForm(updatedContactForm);

    //update formIsValid state
    setFormIsValid(formIsValid);
  };

  //this function is called from inside inputChangedHandler(), and checks the validity of an input field
  const checkValidity = (value, rules) => {
    //it's always true until there's one false in the way
    let isValid = true;
    if (rules.required) {
      //value.trim() gets rid of white space
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.isEmail) {
      //regular expression that matches the shape of an email
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      //pattern.test() returns true or false
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  //this function is called when the user closes the snackbar after getting an error (when the cloud function fails)
  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  //this function is called when clicking the Send button
  const submitForm = () => {
    //if a bot filled the honeypot field, don't keep running code (e.g don't call a cloud function)
    if (contactForm.honeypot.value !== '') {
      //the below return is called an early return and it ends the execution of the function.
      return;
    }

    //set isLoading state to true, so the spinner is rendered
    setIsLoading(true);

    //call the cloud function
    fetch('https://us-central1-apt-port-379723.cloudfunctions.net/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        data: {
          name: contactForm.name.value,
          email: contactForm.email.value,
          message: contactForm.message.value,
        }
      }),
    })
      //the code inside the then() block runs when the message was successfully sent from inside the cloud function
      .then(() => {
        //create a new contactForm object that looks like the original contactForm state
        let originalContactForm = {};
        for (let key in contactForm) {
          originalContactForm[key] = {
            ...contactForm[key],
            value: '',
            valid: key === 'honeypot' ? true : false,
            blur: false,
          };
        }

        //reset contactForm state to its original value
        setContactForm(originalContactForm);

        //reset the whole form validity to false
        setFormIsValid(false);

        //set error state to false.
        setError(false);

        //set isLoading state to false, so the spinner is not rendered anymore
        setIsLoading(false);

        //set openSnackbar state to true, so the snackbar is rendered, with content that depends on the error state
        setOpenSnackbar(true);
      })
      //this code below runs when the message was NOT successfully sent from inside of the cloud function
      .catch((error) => {
        console.error('Error:', error);

        //set error state to true
        setError(true);

        //set isLoading state to false, so the spinner is not rendered anymore
        setIsLoading(false);

        //set openSnackbar state to true, so the snackbar is rendered, with content that depends on the error state
        setOpenSnackbar(true);
      });
  };

  //render all this stuff to DOM
  return (
    <> 
            <h2 className='contact-form-title'>Send us a message</h2>
            <p className='contact-form-body'>We'll get back to you soon.</p>
            <form className='contact-form-wrapper'>
              {formElements}
                  {isLoading ? (
                    <CircularProgress />
                  ) : (
                    <ThemeProvider theme={theme}>
                    <Button
                      onClick={submitForm}
                      disabled={!formIsValid}
                      variant="contained"
                      color="primary"
                    >
                      Send
                    </Button>
                    </ThemeProvider>
                  )}
            </form>
      {error ? (
        <Snackbar
          open={openSnackbar}
          onClose={closeSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={closeSnackbar} severity="error">
            Oops! Something went wrong, try again later.
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={closeSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success">Message sent!</Alert>
        </Snackbar>
      )}
    </>
  );
}
export default ContactForm;