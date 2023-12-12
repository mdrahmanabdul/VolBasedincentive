import './LeftBar.css'
const LeftBar = () =>{
    return(
        <div className="side-bar col-6">
                <label>Credit card type</label>
                <select>
                    <option>Credit</option>
                    <option>Debit</option>
                    <option>Prepaid</option>
                    <option>Test</option>
                    <option>Premium</option>
                    <option>All Cards</option>
                </select>
                
                <br/><br/>
                <label>Card Variant</label>
                <select>
                    <option>Platinum</option>
                    <option>Classic</option>
                    <option>Feature</option>
                    <option>All variants</option>
                </select><br/><br/>
                <label>Period</label>
                <select>
                    <option>Quarter-1</option>
                    <option>Quarter-2</option>
                    <option>Quarter-3</option>
                    <option>Quarter-4</option>
                    <option>All Quaters</option>
                </select><br/><br/>
            <label>Month</label>
            <select>
            <option>M1</option>
            <option>M2</option>
            <option>M3</option>
            <option>M4</option>
            <option>All months</option>
            </select><br/><br/>
                <label>Status</label>
                <select>
                    <option>Collected</option>
                    <option>Yet to be collected</option>
                </select><br/><br/>
                <label>From </label>
                <input type='date'></input> <br/><br/>
                <label>To</label>
                <input type='date'></input>
            </div>
    );
}
export default LeftBar;