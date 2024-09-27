const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Afg1rGCcqTSjTKIiVnL3bvbMCOML-yURyZtRnU1fbApR9QeGTmLQHTUv1LUeH4O2OqM8q-7ekKYmg8BE",
  client_secret: "EH4Bg3QSKU2_NMDYnXEJqzGJq5YHjbsj7hZ95ONRp3H5WZ28zKEMJoHW8yrtXaFr0Jo1WRWwBFIiceek",
});

module.exports = paypal;
