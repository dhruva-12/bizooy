import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router";
import {fetchRequestreview, deleteRequest} from "../../actions/review.action";
import Pagination from "../Pagination";

const Request = () => {
  const request = useSelector((state) => state.review.request);
  const [showPerPage, setShowPerPage] = useState(15);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  let history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequestreview());
  }, [dispatch]);

  const onDelete = (key) => {
    dispatch(deleteRequest(key));
  };

  return (
    <div>
      {request.length != 0 ? (
        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="container-fluid">
            <Dropdown style={{ paddingBottom: "50px" }}>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Actions
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Ask Feedback for all Customers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="table-responsive">
              <div className="card">
                <table className="table table-striped">
                  <thead>
                    <tr className="text-center">
                      <th>Select</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {request[0].customers
                      .slice(pagination.start, pagination.end)
                      .map((customer) => (
                        <tr className="text-center" scope="row">
                          <td>
                            {" "}
                            <input type="checkbox" value="" />
                          </td>
                          <td>{customer.name}</td>
                          <td>{customer.email}</td>
                          <td>{customer.phone}</td>
                          <td>
                            <i
                              className="fa fa-trash trash"
                              onClick={(key) => onDelete(customer.key)}
                             
                            ></i>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
              total={request[0].customers.length}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Request;
