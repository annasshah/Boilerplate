import './App.css';
import {useState, useEffect} from 'react'
import AppRouter from './config/router/Index';
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './config/redux/store/Index';
import {auth,onAuthStateChanged} from './config/firebaseconfig/Index'
import { getData,changeUserAuth } from './config/redux/action/Index';


function App() {

  const [userState, setUserState] = useState()
  // const [apiData, setApiData] = useState()

  


  
  useEffect(() => {


    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(true)
        // changeUserAuth(dispatch, true);
      } else {
        setUserState(false)
        // navigate("/login");
      }
    })

    // setApiData(getData())

  }, []);




  const theme = createTheme({
    palette: {
      primary: {
        main: '#1a1b3a'
      },
      secondary: {
        main: '#fff'
      },
    },
    typography: {
      fontFamily: 'Quicksand'
    }

  })




  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter authState={userState}  />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
