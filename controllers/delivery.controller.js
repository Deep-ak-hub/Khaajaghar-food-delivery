class DeliveryController {
  createDelivery = (req, res, next) => {
    const data = req.body;
    res.json({
      data: {
        deliveryId: "",
        trackingNumber: "",
        estimateDelivery: "",
        status: "",
      },
      message: "Delivery created successfully",
      status: "OK",
    });
  };
}

const deliveryController = new DeliveryController()

module.exports = deliveryController