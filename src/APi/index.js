import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/" });
export const registerUser = (registerUser) =>
  API.post(`/api/v1/admin`, registerUser);
export const loginUser = (loginData) => API.post("api/v1/admin/register", loginData);
export const registeredComplaint = () => API.get("api/v1/complaint");
export const complaintStatus = (data) => API.post(`api/v1/status`, data);
