import React, { Fragment } from 'react'
import Welcome from '../components/welcome'
import ExorciseList from '../components/exerciseList'
import AddButton from '../components/AddButton'


const Exercises = ({data}) => (
  
        <Fragment>
            <Welcome
                username="Martin" />
            <ExorciseList
                exercises={data} />
            <AddButton/>
        </Fragment>
)

export default Exercises