//enum
enum orderStatus {
  pd = "pending",
  shp = "shipped",
  ccl = "cancelled",
}
//function
function displayorderstatus(status: orderStatus) {
  switch (status) {
    case orderStatus.pd:
      console.log("ur order is pd.");
      break;
    case orderStatus.shp:
      console.log("ur order has been sh.");
      break;
    case orderStatus.ccl:
      console.log("ur order has been ccl.");
      break;
    default:
      console.log("Unknow order status.");
  }
}
//test fanction
displayorderstatus(orderStatus.shp);
displayorderstatus(orderStatus.ccl);
displayorderstatus(orderStatus.pd);
