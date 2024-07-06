//enum
var orderStatus;
(function (orderStatus) {
    orderStatus["pd"] = "pending";
    orderStatus["shp"] = "shipped";
    orderStatus["ccl"] = "cancelled";
})(orderStatus || (orderStatus = {}));
//function
function displayorderstatus(status) {
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
