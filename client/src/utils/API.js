import axios from "axios";

export default {
  //Properties
  getProperties: function () {
    return axios.get("/api/properties");
  },
  getProperty: function (id) {
    return axios.get("/api/properties/" + id);
  },
  deleteProperty: function (id) {
    return axios.delete("/api/properties/" + id);
  },
  saveProperty: function (propertyData) {
    return axios.post("/api/properties", propertyData);
  },
//Tenants
  getTenants: function () {
    return axios.get("/api/tenants");
  },
  getTenant: function (id) {
    return axios.get("/api/tenants/" + id);
  },
  deleteTenant: function (id) {
    return axios.delete("/api/tenants/" + id);
  },
  saveTenant: function (tenantData) {
    return axios.post("/api/tenants", tenantData);
  },
//Owners
  getOwners: function () {
    return axios.get("/api/owners");
  },
  getOwner: function (id) {
    return axios.get("/api/owners/" + id);
  },
  deleteOwner: function (id) {
    return axios.delete("/api/owners/" + id);
  },
  saveOwner: function (ownerData) {
    return axios.post("/api/owners", ownerData);
  }
};
