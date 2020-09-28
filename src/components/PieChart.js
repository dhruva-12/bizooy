import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { fetchDashboard } from "../actions/dashboard.action";
import { useEffect } from "react";

const PieChart = (props) => {
  const dashboard = useSelector((state) => state.dashboardReducer.dashboard);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);
  
  const dataValue = dashboard[0].statistics.customers;
  let temp = [];
  for (const { count } of dataValue) {
    temp.push(count);
  }
  const data = {
    labels: ["Request review", "completed", "unopened", "opened"],
    datasets: [
      {
        data: temp,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#32CD32"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#32CD32"],
      },
    ],
  };

  return <Pie data={data} />;
};
export default PieChart;
