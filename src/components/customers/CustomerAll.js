import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "../../actions/customer.action";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerAll = () => {
  const customerall = useSelector((state) => state.customer.customerall);

  let history = useHistory();

  const dispatch = useDispatch();

  const todosPerPage = 10;
  const [activePage, setCurrentPage] = useState(1);

  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div>
      {customerall.length != 0 ? (
        <div class="container" style={{ paddingTop: "30px" }}>
          <h2 className="text-center">ALL CUSTOMERS</h2>
          <div className="container-fluid">
            <div className="table-responsive">
              <div className="card">
                <table className="table table-striped">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone Number</th>
                    </tr>
                  </thead>

                  <tbody>
                    {customerall[0].customers
                      .slice(indexOfFirstTodo, indexOfLastTodo)
                      .map((customer) => (
                        <tr className="text-center" scope="row">
                          <td>{customer.name}</td>
                          <td>{customer.email}</td>
                          <td>{customer.phone}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
           <div className="text-center float-right">
            <Pagination
              activePage={activePage}
              totalItemsCount={customerall[0].customers.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
              firstPageText="Previous"
              lastPageText="Next"
            />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CustomerAll;
