/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const scheduleContext = createContext();


const ScheduleProvider = ({ children }) => {

    const [schedule, setSchedule] = useState([]);
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const localToken = localStorage.getItem('token')

        const localTodos = localStorage.getItem('todos')
        if (localTodos) {
            const formatedTodos = JSON.parse(localTodos)
            setSchedule(formatedTodos || [])
        }

        if (localToken) {
            setToken(localToken)
        }
    }, [])


    const updateScheduleState = (payload) => {
        setSchedule(payload)
        localStorage.setItem('todos', JSON.stringify(payload))
    }

    const value = {
        schedule,
        setSchedule,
        setError,
        error,
        isLoading,
        setIsLoading,
        token,
        updateScheduleState
    }

    return (
        <scheduleContext.Provider value={value}>
            {children}
        </scheduleContext.Provider>
    )
}

export default ScheduleProvider