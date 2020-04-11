import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExerciseContainer'
import ExcerciseNewContainer from '../pages/ExecerciseNewContainer'
import NotFound from '../pages/400'

const App = () => (
        <BrowserRouter>
            <Switch>
             <Route exact path="/exercise" component={ExercisesContainer}/>
             <Route exact path="/exercise/new" component={ExcerciseNewContainer}/>
             <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )


export default App