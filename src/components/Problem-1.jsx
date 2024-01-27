import React, { useState } from "react";

const Problem1 = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const dataStatus = {
    active: 1,
    completed: 2,
    pending: 3,
    archive: 4,
  };

  const handleClick = (val) => {
    setShow(val);
  };

  const resetData = () => {
    setName("");
    setStatus("");
  };

  const changeData = (statusString, data) => {
    handleClick(statusString);

    let newData = [];
    if (statusString === "active") {
      newData = data.filter((item) => item.status === statusString);
    } else if (statusString === "completed") {
      newData = data.filter((item) => item.status === statusString);
    } else {
      newData = data.sort((a, b) => a.dataStatus - b.dataStatus);
    }

    setSortedData([...newData]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeData(show, [
      ...data,
      { name, status, dataStatus: dataStatus[status] },
    ]);
    setData([
      ...data,
      { name, status: status.toLowerCase(), dataStatus: dataStatus[status] },
    ]);
    resetData();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => changeData("all", data)}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => changeData("active", data)}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => changeData("completed", data)}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.length
                ? sortedData.map((item, index) => (
                    <tr key={index}>
                      <td scope="col">{item.name}</td>
                      <td scope="col">{item.status}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
