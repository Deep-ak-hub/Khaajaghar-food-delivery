class RestaurantController {
  getRestaurant = (req, res, next) => {
    const data = [
      {
        id: 1,
        brandName: "Restaurantname1",
        RestaurantCategory: "RestaurantCategory1",
      },
    ];
    res.json({
      data: data,
      message: "Restaurants fetched successfully",
      status: "OK",
    });
  };
}

const restaurantController = new RestaurantController();

module.exports = restaurantController;
