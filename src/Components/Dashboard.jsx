import ContentView from './ContentView';
import LeftBar from './LeftBar';
import Navbar from './Navbar';
const Dashboard = () =>{
    return(
        <div className="wrapper">
            <div className='nav-bar'>
                <Navbar/>
            </div>
            <div className='row'>
            
            <div className='left-bar col-2' >
            <LeftBar/>
            </div>
            <div className="content-view col-9">
                <ContentView/>
            </div>
            </div>
        </div>
    );
}
export default Dashboard;