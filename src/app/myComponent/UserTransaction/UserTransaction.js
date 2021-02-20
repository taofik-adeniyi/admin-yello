import React from "react";
import GoBack from "../GoBack/GoBack";
// import Filter from "../../shared/Filter";
import Title from "./Title";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function UserTransaction() {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          <GoBack />
          Each User: Transactions (Details)
        </h3>
      </div>

      {/* <Filter />   */}
      <div className="container">
        <div style={{ width: "60%", margin: "0 auto" }}>
          <form>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's Phone Number"
                aria-label="Recipient's Phone Number"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-warning" type="button">
                  Refresh
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <div className="card-title">Title</div> */}
                <div className="col-lg-12 mt-5">
                  <Title title="Showing Player details on Prediction" />
                  <div className="table-responsive">
                    <table
                      className="table table-stripped"
                      style={{ marginBottom: "50px" }}
                    >
                      <tbody>
                        <tr style={{ backgroundColor: "white" }}>
                          <td>
                            <b>Total Played</b>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>1,235</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Coins</b>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>1,235</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Points won</b>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>1,235</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-striped">
                      <TableHead
                        tdone="Question"
                        tdtwo="Status"
                        tdthree="points"
                        tdfour="time played"
                      />
                      <TableBody />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <div className="card-title">Title</div> */}
                <div className="col-lg-12 mt-5">
                  <Title title="Showing Player details on Trivia" />
                  <div className="table-responsive">
                    <table
                      className="table table-stripped"
                      style={{ marginBottom: "50px" }}
                    >
                      <tbody>
                        <tr style={{ backgroundColor: "white" }}>
                          <td>
                            <b>Total Played</b>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>1,235</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Coins</b>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>1,235</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Points won</b>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>1,235</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-striped">
                      <TableHead
                        tdone="Question"
                        tdtwo="Status"
                        tdthree="points"
                        tdfour="time played"
                      />
                      <TableBody />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserTransaction;
