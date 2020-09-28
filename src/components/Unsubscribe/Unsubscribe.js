import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

import { useHistory } from "react-router";
import { fetchUnsubscribe } from "../../actions/unsubscribe.action";
import Pagination from "../Pagination";

const Unsubscribe = () => {
  const unsubscribe = useSelector((state) => state.unsubscribe.unsubscribe);
  const [showPerPage, setShowPerPage] = useState(4);
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
    dispatch(fetchUnsubscribe());
  }, [dispatch]);

  return (
    <div>
      {unsubscribe.length != 0 ? (
        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="container-fluid">
            <div className="table-responsive">
              <div className="card">
                <table className="table table-striped">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Email</th>
                      <th scope="col">Date Unsubscribed</th>
                    </tr>
                  </thead>

                  <tbody>
                    {unsubscribe[0].customers
                      .slice(pagination.start, pagination.end)
                      .map((customer) => (
                        <tr className="text-center" scope="row">
                          <td>{customer.email}</td>
                          <td>{customer.date_unsubscribed}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
              total={unsubscribe[0].customers.length}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Unsubscribe;
