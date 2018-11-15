import React from 'react';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import Index from '../views/index';
import App from '../App';


// const AppRouter = ()=>(
//     <Router>
//         <Switch>
//             <Route exact   path={'/home'} component={Index} />
//             <Route  path={'/app'} component={App} />
//         </Switch>
//     </Router>
// )

const routes = [{
    path: '/home',
    exact: true,
    component: Index,

},{
    path: '/app',
    component: App,
}];

const AppRouter = ()=>(
    <Router>
        <Switch>
            {
                routes.map((route,index)=>(
                    <Route key={index} exact={route.exact} component={route.component} path={route.path}/>
                ))
            }
        </Switch>
    </Router>
)

export default AppRouter