import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompletedreview } from "../../actions/completed.action";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { deleteRequest } from "../../actions/review.action";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "../Pagination";

const CompletedReview = () => {
  const completed = useSelector((state) => state.completed.completed);

  let history = useHistory();
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompletedreview());
  }, [dispatch]);

  const onDelete = (key) => {
    dispatch(deleteRequest(key));
  };

  return (
    <div>
      {completed.length != 0 ? (
        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="container-fluid">
            <div className="table-responsive">
              {completed[0].customers.length != 0 ? (
                <div className="card">
                  <table className="table table-striped">
                    <thead>
                      <tr className="text-center">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Source</th>
                        <th scope="col">Feedback Message</th>
                      </tr>
                    </thead>

                    <tbody>
                      {completed[0].customers
                        .slice(pagination.start, pagination.end)
                        .map((customer) => (
                          <tr className="text-center" scope="row">
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.rating}</td>
                            <td>{customer.source}</td>
                            <td>{customer.feedback}</td>
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
                  <Pagination
                    showPerPage={showPerPage}
                    onPaginationChange={onPaginationChange}
                    total={completed[0].customers.length}
                  />
                </div>
              ) : (
                <h2 className="text-center notAvailableTextStyle">No completed reviews customers available</h2>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CompletedReview;
