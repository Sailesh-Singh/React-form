import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <table class="table">
            <thead>
              <tr>
                <th class="table_header" colspan="7">General Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="detail_space" colspan="3">
                  <label for="Date">Date:</label>
                  <input type="text" name="date" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label for="Customer Name">Customer Name:</label>
                  <input type="text" name="CName" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="3">
                  <label for="Customer Address">Customer Address:</label>
                  <input type="text" name="CAddress" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label for="Job Name">Job Name:</label>
                  <input type="text" name="JbName" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="3">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label for="Customer Contact">Customer Contact:</label>
                  <input type="text" name="CuContact" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" id="ZipCode">
                  <label for="Zip Code">Zip Code:</label>
                  <input type="text" name="ZiCode" id="" value="" />
                </td>
                <td class="detail_space" colspan="2">
                  <label for="Plant Name">Plant Name:</label>
                  <input type="text" name="PlName" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label for="Customer Tel. No">Customer Tel. No:</label>
                  <input type="text" name="CusTelNo" id="" value="" />
                </td>
              </tr>

              <tr>
                <th class="table_header" colspan="7">Details of Work Carried Out</th>
              </tr>
              <tr>
                <td class="detail_space" colspan="7">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="7">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="7">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="7">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="7">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="7">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="7">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
            
              <tr>
                <th class="table_header" colspan="7">Future Action Needed</th>
              </tr>
              <tr>
                <td class="table_subHeader_FAN" colspan="6">
                <label for="Details">Details</label>
                </td>
                <td class="table_subHeader_FAN">
                <label for="Estimated Cost">Estimated Cost (if known)</label>
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="6">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="0">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="6">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="0">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="6">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="0">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="6">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="0">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="6">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="0">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>

              <tr>
                <th class="table_header" colspan="7">Parts used</th>
              </tr>
              <tr>
                <td class="table_subHeader_PU" colspan="2">
                <label for="Part No">Part No:</label>
                </td>
                <td class="table_subHeader_PU" colspan="4">
                <label for="Description">Description</label>
                </td>
                <td class="table_subHeader_PU">
                <label for="Cost">Cost</label>
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="2">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="2">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="2">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="2">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="2">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="2">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="2">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space" colspan="2">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space" colspan="4">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>

              <tr>
                <th class="table_header" colspan="4">Labor/Times</th>
                <th class="table_header">Signatures</th>
                <td class="detail_space" colspan="2">
                </td>
              </tr>
              <tr>
                <td class="table_subHeader_LT">
                  <label for="Date">Date</label>
                </td>
                <td class="table_subHeader_LT">
                  <label for="Travel">Travel</label>
                </td>
                <td class="table_subHeader_LT">
                  <label for="On-Site">On-Site</label>
                </td>
                <td class="table_subHeader_LT">
                  <label for="Off-Site">Off-Site</label>
                </td>
                <td class="table_subHeader_SIGN">In refering to this job, quote No.<br/>The time recorded are correct.The work has been completed to my satisfaction.
                </td>
                <td class="detail_space">
                  <label for="Parts/Materials Total">Parts/Materials<br/>Total</label>
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label for="Customer Signature">Customer Signature</label>
                </td>
                <td class="detail_space">
                  <label for="Labor">Labor:</label>
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label for="Misc">Misc:</label>
                  </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label for="Tech Signature">Tech Signature</label>
                </td>
                <td class="detail_space">
                  <label for="Tax">Tax:</label>
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
              <tr>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
                <td class="detail_space">
                  <label for="Total">Total:</label>
                </td>
                <td class="detail_space">
                  <label></label>
                  <input type="text" name="nul" id="" value="" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </header>
    </div>
  );
}

export default App;
