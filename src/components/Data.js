import React, { useState, useEffect } from "react";
import { registeredComplaint } from "./../APi/index";
function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    registeredComplaint()
      .then((res) => {
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
            <th scope="col">ConcernedPerson</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.complaintType}</td>
                <td>{item.concernedPerson}</td>
                <td>{item.createdDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
