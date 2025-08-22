class OrderController {
  getOrder = (req, res, next) => {
    const data = [
      {
        id: 1,
        orderName: "OrderName 1",
        orderType: "OrderType",
      },
    ];

    res.json({
      data: data,
      message: "Order fetched successfully",
      status: "OK",
    });
  };
}

const orderController = new OrderController();

module.exports = orderController;
