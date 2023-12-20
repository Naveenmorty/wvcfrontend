import './App.css';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/Login/ForgetPassword';
import Dashboard from './Components/Dashboard/Dashboard';
import Instruction from './Components/Login/Instruction';
import NewPassword from './Components/Login/NewPassword';
import Fundraiser from './Components/Fundraiser/Fundraiser';
import Donors from './Components/Donors/Donors';
// import DonorDetailsTable from './Components/Donors/DetailsTable';
import Transactions from './Components/Transactions/Transactions';
import Campaigns from './Components/Campaigns/Campaigns'

const fontFamily = createTheme({
  typography: {
    "fontFamily": `"Hanken Grotesk", "sans-serif"`,
  }
});

function App() {
  return (
    <ThemeProvider theme={fontFamily}>
      <Routes>
        <Route exact path='' element={<Login />} />
        {/* <Route exact path='/forget-password' element={<ForgetPassword />} /> */}
        {/* <Route exact path='/instruction' element={<Instruction/>} /> */}
        {/* <Route exact path='/reset-password' element={<NewPassword/>} /> */}
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/fundraisers' element={<Fundraiser />} />
        <Route exact path='/donors' element={<Donors />} />
        {/* <Route exact path='/donor/details' element={<DonorDetailsTable />} /> */}
        <Route exact path='/transactions' element={<Transactions />} />
        <Route exact path='/campaigns' element={<Campaigns />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
