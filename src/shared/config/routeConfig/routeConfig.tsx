import { RouteProps } from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import { AboutPage } from "pages/AboutPage";

export enum AppRoutes{
    MAIN='main',
    ABOUT='about'

}

export const RoutePath:Record<AppRoutes, string>={
    [AppRoutes.ABOUT]:'/about',
    [AppRoutes.MAIN]:'/'
}

export const routeConfig:Record<AppRoutes, RouteProps>={
    [AppRoutes.MAIN]:{
        path:RoutePath.main,
        element:<MainPage/>
    },
    [AppRoutes.ABOUT]:{
        path:RoutePath.about,
        element:<AboutPage/>
    },

}