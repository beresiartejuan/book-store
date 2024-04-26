import { Switch, Route } from "wouter";

import Home from './../pages/Home'
import SearchList from './../pages/SearchList'
import DetailBook from './../pages/Detail'
import AboutUsSection from './../pages/AboutUsSection'
import AllBooks from './../pages/AllBooks'
import Authors from './../pages/Authors'
import BuyPage from './../pages/BuyPage'
import Contact from './../pages/Contact'

const routes_allowed = [
    {
        component: Home,
        path: '/'
    },
    {
        component: SearchList,
        path: '/search'
    },
    {
        component: DetailBook,
        path: '/detail'
    },
    {
        component: AboutUsSection,
        path: '/about-us'
    },
    {
        component: AllBooks,
        path: '/books'
    },
    {
        component: Authors,
        path: '/authors'
    },
    {
        component: BuyPage,
        path: '/buy'
    },
    {
        component: Contact,
        path: '/contact'
    }
];

export default function RoutesAllowed() {

    return (
        <Switch>
            {routes_allowed.map(route => (
                <Route path={route.path} component={route.component}></Route>
            ))}
        </Switch>
    )

}