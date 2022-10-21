import config from "~/configs/config"
import Home from "~/pages/Home/Home"
import Catalog from "~/pages/Catalog/Catalog"
import Product from "~/pages/Product/Product"
import Accessory from "~/pages/Accessory/Accessory"
import Contact from "~/pages/Contact/Contact"
import Cart from "~/pages/Cart/Cart"

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home
    },
    {
        path: config.routes.catalog,
        component: Catalog
    },
    {
        path: config.routes.product,
        component: Product
    },
    {
        path: config.routes.accessory,
        component: Accessory
    },
    {
        path: config.routes.contact,
        component: Contact
    },
    {
        path: config.routes.cart,
        component: Cart
    }
]

const privateRoutes = []

export {publicRoutes, privateRoutes}