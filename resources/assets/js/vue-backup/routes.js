import Home from './containers/Home'
import Login from './containers/Login'
import Products from './containers/Products'
import Product from './containers/Product'
const routes = [
    { path: '/', component: Home, props: true },
    { path: '/login', component: Login, props: true },
    { path: '/product', component: Products, props: true },
    { path: '/product/:slug', component: Product, props:true }
]

export default routes
