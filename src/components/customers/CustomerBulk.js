import React, { useState , Fragment} from "react";
import "react-dropzone-uploader/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerbulk } from "../../actions/customer.action";
import "react-toastify/dist/ReactToastify.css";

const CustomerBulk = () => {



  const customeraddbulk = useSelector((state) => state.customer.customer);
  const [byComingBack, setbyComingBack] = useState(false);
  const [initialState, setinitialState]=useState(true);
  function handleGoBack() {
    setbyComingBack(true);
  }
  const [file, setfile] = useState("");
  const [filename, setfilename] = useState("Choose File");
 

  let dispatch = useDispatch();

  const onChange = (e) => {
    setfile(e.target.files[0]);
    setfilename(e.target.files[0].name);
  };

  const customerbulk = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    dispatch(addCustomerbulk(file));
    setinitialState(false);
  };

  return (
    <Fragment>

{(customeraddbulk === "" || byComingBack || initialState )? (
    <form
      method="post"
      enctype="multipart/form-data"
    >
      <div className="col-sm-12 p-4">
        <div className="card my-4">
          <div className="card-body">
            <h5>Please Select One File:</h5>

            <div className="custom-file">
              <input
                type="file"
                name="file"
                accept=".csv"
                className="custom-file-input"
                id="customFile"
                onChange={onChange}
              />
              <label className="custom-file-label" for="customFile">
                {filename}
              </label>
            </div>

            <h6>Please just upload CSV file*</h6>

            <button
              style={{ width: "30%" }}
              className="btn-lg btn-primary text-center"
              type="submit"
              onClick={(e) => customerbulk(e, "success")} 
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </form>

) : 
    <div className="p-3" >
    <div className="card m-2">
        <div className="card-header text-center">
          <h6>Customers in bulk added Successfully!!</h6>
          <button className="btn-outline-primary" onClick={() => handleGoBack()}>Go Back</button>
        </div>
      </div>
      </div>
}
</Fragment>


  );
};

export default CustomerBulk;
