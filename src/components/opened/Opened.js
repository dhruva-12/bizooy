import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { fetchOpenedreview, deleteRequest } from "../../actions/review.action";
import Pagination from "../Pagination";

const Opened = () => {
  const opened = useSelector((state) => state.review.opened);

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
    dispatch(fetchOpenedreview());
  }, [dispatch]);

  const onDelete = (key) => {
    dispatch(deleteRequest(key));
  };

  return (
    <div>
      {opened.length != 0 ? (
        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="container-fluid">
            <div className="table-responsive">
              {opened[0].customers.length != 0 ? (
                <div className="card">
                  <table className="table table-striped">
                    <thead>
                      <tr className="text-center">
                        <th>Select</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                      </tr>
                    </thead>

                    <tbody>
                      {opened[0].customers
                        .slice(pagination.start, pagination.end)
                        .map((customer) => (
                          <tr className="text-center" scope="row">
                            <td>
                              {" "}
                              <input type="checkbox" />
                            </td>
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
                  <Pagination
                    showPerPage={showPerPage}
                    onPaginationChange={onPaginationChange}
                    total={opened[0].customers.length}
                  />
                </div>
              ) : (
                <h4 className="text-center notAvailableTextStyle">
                  No opened reviews customers available
                </h4>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Opened;
