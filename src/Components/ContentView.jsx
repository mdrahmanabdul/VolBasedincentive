import './contentview.css';
const ContentView = () =>{
    return(
        <div className="content-view">
            <table>
                <tr>
                    <td>Sr.no</td>
                    <td>Bank name</td>
                    <td>Txn. CNT(in Mn.)</td>
                    <td>Txn. AMT(in Mn.)</td>
                    <td>Eligibilty(0.015% or 0.030%)</td>
                    <td>Pay out(in Mn)</td>
                </tr>
            </table>
        </div>
    );
}
export default ContentView;