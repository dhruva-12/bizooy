import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnopenedreview } from "../../actions/review.action";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { deleteRequest } from "../../actions/review.action";
import Pagination from "../Pagination";

const Unopened = () => {
  const unopened = useSelector((state) => state.review.unopened);
  

  let history = useHistory();
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUnopenedreview());
  }, [dispatch]);

  const onDelete = (key) => {
    console.log("key", key);
    dispatch(deleteRequest(key));
  };

  return (
    <div>
      {unopened.length != 0 ? (
        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="container-fluid">
            <div className="table-responsive">
              <div className="card">
                <table className="table table-striped">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone Number</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {unopened[0].customers
                      .slice(pagination.start, pagination.end)
                      .map((customer) => (
                        <tr className="text-center" scope="row">
                          <td>{customer.name}</td>
                          <td>{customer.email}</td>
                          <td>{customer.phone}</td>
                          <td>
                            <i
                              className="fa fa-trash"
                              onClick={(key) => onDelete(customer.key)}
                              style={{
                                width: 35,

                                fontSize: 16,
                                padding: 11,
                                color: "#e4566e",
                              }}
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
              total={unopened[0].customers.length}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Unopened;
