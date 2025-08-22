class TransactonController {
  getTransaction = (req, res, next) => {
    const data = [
      {
        id: 1,
        transactionName: "transactionName1",
        transactionType: "transactionType1",
        transactionAmount: 1000,
      },
    ];

    res.json({
      data: data,
      message: "transaction successful",
      status: "OK",
    });
  };
}

const transactionController = new TransactonController();

module.exports = transactionController;
