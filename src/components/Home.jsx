import React from 'react';
// import Navbar from './components/Navbar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import WaveChart from './WaveChart';
import Bargraph from './Bargraph';
import { width } from '@mui/system';
import '../App.css'
import CashFlow from './CashFlow';
import DataGrid from './Datagrid';

const Home = () => {
    return (
        <>
<div  className='main' >
      <div>
      <Navbar />
        <Sidebar />
          
</div>

<div style={{ background:'rgb(246,247,249)',marginTop:'2.5vh'}}>
<div className='upper-div' style={{display:'flex', justifyContent:'space-around', height:'20%'} }>

<div className='wavechart'>

<WaveChart/>
</div>
<div><Bargraph/></div>

</div>



<div style={{display:'flex', justifyContent:'space-around',marginLeft:'-90px'}}>
  <div style={{ marginLeft:'5%', alignItems:'center',display:'flex', justifyContent:'center',width:'50%',marginRight:'-190px'}}><CashFlow/></div>
  <div className='table' style={{marginLeft:'20px',marginRight:'-30px',paddingLeft:'-70px',paddingRight:'-30px',}}><DataGrid/></div>
</div>

</div>
      



    </div>
            
        </>
    );
}

export default Home;
