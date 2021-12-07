import './App.css';
import AppRouter from './config/router/Index';
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './config/redux/store/Index';



function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#012E40'
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
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
