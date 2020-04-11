import React from 'react'
import FatalError from './500'
import Exercises from './Exercises'
import useFetch from '../Hooks/useFetch'
import url from '../config'
import Loading from '../components/loading'
const ExerciseContainer = () => {
    const{data, loading, error} = useFetch(`${url}/exercises`)
 
    if(loading)
        return <Loading />
    
    if(error)
    return <FatalError/>

    return <Exercises 
        data={data}/>
}

export default ExerciseContainer