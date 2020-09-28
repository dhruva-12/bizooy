import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { fetchDashboard } from "../actions/dashboard.action";
import { useEffect } from "react";
const Bargraph = (props) => {
  const dashboard = useSelector((state) => state.dashboardReducer.dashboard);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  const dataValue1 = dashboard[0].profiles[0].count;
  const dataValue2 = dashboard[0].profiles[1].count;
  const dataValue3 = dashboard[0].profiles[2].count;
  const dataValue4 = dashboard[0].profiles[3].count;
  
 

  const data = {
    labels: ["Facebook", "Yelp", "Google", "Custom"],
    datasets: [
      {
        label: "Facebook",
        backgroundColor: "rgba(110, 0, 255, 0.1)",
        borderColor: "rgba(110, 0, 255, 0.1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(110, 0, 255, 0.1)",
        hoverBorderColor: "rgba(110, 0, 255, 0.1)",
        data: dataValue1,
      },
      {
        label: "Yelp",
        backgroundColor: "rgba(255, 86, 48, 0.11)",
        borderColor: "rgba(255, 86, 48, 0.11)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 86, 48, 0.11)",
        hoverBorderColor: "rgba(255, 86, 48, 0.11)",
        data: dataValue2,
      },
      {
        label: "Google",
        backgroundColor: "rgba(7, 191, 88, 0.1)",
        borderColor: "rgba(7, 191, 88, 0.1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(7, 191, 88, 0.1)",
        hoverBorderColor: "rgba(7, 191, 88, 0.1)",
        data: dataValue3,
      },
      {
        label: "Custom",
        backgroundColor: "rgba(239, 203, 113, 1)",
        borderColor: "rgba(239, 203, 113, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(239, 203, 113, 1)",
        hoverBorderColor: "rgba(239, 203, 113, 1)",
        data: dataValue4,
      },


    ],
  };

  return <Bar data={data} width={100} height={50} />;
  
};
export default Bargraph;
