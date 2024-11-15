import { clientAxios } from "../../config/apiConfig"
import { GetMoviesParams } from "./types"

export const apiSearcher = () => {
    const getMovies = async ({query}: GetMoviesParams) => {
        const response = await clientAxios(`/3/search/movie?query=${query}`);
        return response.data;
    }

    return { getMovies };
}