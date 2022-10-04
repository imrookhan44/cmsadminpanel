import React, { useState, useEffect } from "react";
import { registeredComplaint, complaintStatus } from "./../APi/index";
function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    registeredComplaint()
      .then((res) => {
        console.log("data res:", res.data)
        console.log("res:", res)
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">ComplaintType</th>
            <th scope="col">Complaint Detail</th>

            <th scope="col">ConcernedPerson</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index.id}>
                {/* skdfhksjdvgd */}
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.complaintType}</td>
                <td>{ item.complaintDetail}</td>
                <td>{item.concernedPerson}</td>
                <td>{item.createdDate}</td>
                <td>  <select name="" id="" onChange={
                  (event) => {
                    const data = {
                      status: event.target.value,
                      id: item._id,
                    };
                    complaintStatus(data)
                      .then((res) => {
                        console.log("res in status::", res);
                      })
                      .catch((error) => {
                        console.log(error);
                        alert("there is an error");
                      });
                  }

                }   >
                <option value="completed">completed</option>
                <option value="resolved">progress</option>
              </select> </td>
              </tr>

            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
