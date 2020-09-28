import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDashboard } from "../../actions/dashboard.action";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import "./dashboard.css";
import { useHistory } from "react-router";
import Bargraph from "../Bargraph";
import PieChart from "../PieChart";
import { ProgressBar } from 'react-bootstrap';
const Dashboard2 = () => {
  const dashboard = useSelector((state) => state.dashboardReducer.dashboard);

 
  let history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);
  
  return (
    <div>
      <div>
        <div className="ecaps-page-wrapper">
          <div className="ecaps-page-content">
            {dashboard.length != 0 ? (
              <div className="main-content" style={{ marginTop: "100px" }}>
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-xl-4">
                      <div className="card box-margin">
                        <div className="card-body">
                          <div className="float-right">
                            <i className="fa fa-pencil text-primary font-30" />
                          </div>
                          <span className="badge badge-primary">
                            New Reviews
                          </span>
                          <h4 className="my-3">
                            {dashboard[0].reviews.reviewsCreatedThisMonth}
                            <span>
                              <small> created this month.</small>
                            </span>
                          </h4>
                        </div>
                      </div>
                      {/*end card*/}
                    </div>
                    {/*end col*/}

                    <div className="col-md-6 col-xl-4">
                      <div className="card box-margin">
                        <div className="card-body">
                          <div className="float-right">
                            <i className="fa fa-paper-plane font-30" />
                          </div>
                          <span className="badge badge-secondary">
                            New Requests
                          </span>
                          <h4 className="my-3">
                            {dashboard[0].reviews.monthlyRequests}
                            <span>
                              <small> requests sent this month</small>
                            </span>
                          </h4>
                        </div>
                        {/*end card-body*/}
                      </div>
                      {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-xl-4">
                      <div className="card box-margin">
                        <div className="card-body">
                          <div className="float-right">
                            <span
                              style={{
                                lineHeight: "1.4",
                                color: "#3c4858",
                                fontWeight: 700,
                                fontSize: "1.5rem",
                              }}
                            >
                              {dashboard[0].statistics.ratingAverage}
                            </span>
                            <i className="fa fa-star text-warning font-30" />
                          </div>
                          <span className="badge badge-warning">
                            Rating Average
                          </span>
                          <h4 className="my-3">
                            <span>
                              <small>
                                out of{" "}
                                {dashboard[0].statistics.customers[3].count}{" "}
                                reviews.
                              </small>
                            </span>
                          </h4>
                        </div>
                        {/*end card-body*/}
                      </div>
                      {/*end card*/}
                    </div>

                    <div className="col-xl-12 w-100 box-margin height-card">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Monthly Request Quota</h5>
                          <div className="crm-statement border p-4">
                            <h6 className="text-center font-weight-bold mb-30 font-24">
                              Overview
                            </h6>
                            <div className="row">
                              <div className="col text-center mb-15">
                                <h6 className="font-14 mb-1">Requests sent</h6>
                                <p className="font-16 mb-0">
                                  {dashboard[0].reviews.monthlyRequests}
                                </p>
                              </div>
                              <div className="col text-center mb-15">
                                <h6 className="font-14 mb-1">
                                  Max. number of requests
                                </h6>
                                <p className="font-16 mb-0">
                                  {dashboard[0].reviews.monthlyLimit}
                                </p>
                              </div>
                            </div>

                            <div className="progress-bar-showcase">
                              <div className="progress sm-progress-bar">
                                <div
                                  className={`progress-bar ${(((dashboard[0].reviews.monthlyRequests * 100) / (dashboard[0].reviews.monthlyLimit) ) > 100) ? 'bg-danger' : 'bg-primary'}`}
                                  role="progressbar"
                                  style={{ width: (((dashboard[0].reviews.monthlyRequests * 100) / (dashboard[0].reviews.monthlyLimit) +"%")) }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-4 pb-4 box-margin height-card ">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title"> Review per Status </h5>

                          {dashboard[0].statistics.customers.map((customer) => (
                            <div className="d-flex flex-row list-group-item align-items-left justify-content-between">
                              <div className="media-body">
                                <h6 className="mx-2 mb-1">{customer.status}</h6>
                              </div>

                              <div className="amount">
                                <p className="mb-0 mx-5 font-weight-bold text-dark">
                                  <h6 className="mx-2 mb-1">
                                    {" "}
                                    {customer.count}
                                  </h6>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 box-margin height-card">
                      <div className="card" style={{ width: "800px" }}>
                        <div className="card-body">
                          <PieChart />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-4 pb-4 box-margin height-card ">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title">Profile Overview</h5>
                          <div className="transaction-area">
                            <div className="d-flex flex-row list-group-item align-items-center justify-content-between">
                              <div className="media d-flex justify-content-center align-items-center">
                                <div className="icon-section bg-primary-soft">
                                  <i className="fa fa-facebook" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mx-2 mb-1">Facebook</h6>
                                </div>
                              </div>
                              <div className="amount">
                                <p className="mb-0 font-weight-bold text-dark">
                                  {dashboard[0].profiles[0].count}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row list-group-item align-items-center justify-content-between">
                              <div className="media d-flex justify-content-center align-items-center">
                                <div className="icon-section bg-danger-soft">
                                  <i className="fa fa-yelp" />
                                </div>
                                <div className="media-body">
                                  <h6 className=" mx-2 mb-1">Yelp</h6>
                                </div>
                              </div>
                              <div className="amount">
                                <p className="mb-0 font-weight-bold text-dark">
                                  {dashboard[0].profiles[1].count}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row list-group-item align-items-center justify-content-between">
                              <div className="media d-flex justify-content-center align-items-center">
                                <div className="icon-section bg-success-soft">
                                  <i className="fa fa-google" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mx-2 mb-1">Google</h6>
                                </div>
                              </div>
                              <div className="amount">
                                <p className="mb-0 font-weight-bold text-dark">
                                  {dashboard[0].profiles[2].count}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row list-group-item align-items-center justify-content-between">
                              <div className="media d-flex justify-content-center align-items-center">
                                <div className="icon-section bg-warning-soft">
                                  <i className="fa fa-external-link" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mx-2 mb-1">Custom Link</h6>
                                </div>
                              </div>
                              <div className="amount">
                                <p className="mb-0 font-weight-bold text-dark">
                                  {dashboard[0].profiles[3].count}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 box-margin height-card">
                      <div className="card" style={{ width: "800px" }}>
                        <div className="card-body">
                          <p className="text-center">
                            Completed Review per Social Profile
                          </p>
                          <Bargraph />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
