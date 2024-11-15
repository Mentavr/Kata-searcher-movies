import { useState, type ReactNode } from "react"
import { StateContext } from "./SearcherStateContext"

interface ISearcherStateProvider {
    children: ReactNode;
}

export const SearcherStateProvider = ({ children }: ISearcherStateProvider) => {
    const [movies, setMovies] = useState();




    const SearcherStateValue = {

    }

    return (
        <StateContext.Provider value={SearcherStateValue}>
            {children}
        </StateContext.Provider>
    )
}