class CategoryController {
  getCategory = (req, res, next) => {
    const data = [
      {
        id: 1,
        categoryName: "categoryName1",
        categoryType: "categoryType",
      },
    ];

    res.json({
      data: data,
      message: "category fetched successfully",
      status: "OK",
    });
  };
}

const categoryController = new CategoryController();

module.exports = categoryController;
