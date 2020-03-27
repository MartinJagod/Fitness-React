import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExcerciseNew from '../pages/ExecerciseNew'
import NotFound from '../pages/NotFound'

const App = () => (
        <BrowserRouter>
            <Switch>
             <Route exact path="/exercise" component={Exercises}/>
             <Route exact path="/exercise/new" component={ExcerciseNew}/>
             <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )


export default App