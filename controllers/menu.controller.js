class MenuController {
    getMenu = (req, res, next) => {
        res.json({
            data: {},
            message: "Menu items fetched successull",
            status: "OK"
        })
    }
}

const menuController = new MenuController()

module.exports = menuController