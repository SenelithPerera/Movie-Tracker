export const EndPointsHelper = Object.freeze({

    originalImgBaseUrl: process.env.REACT_APP_MOVIE_DB_IMG_BASE_URL_ORIG,
    imgBaseUrl: process.env.REACT_APP_MOVIE_DB_IMG_BASE_URL_500, 


    client: `${process.env.REACT_APP_BACKEND_URL}/clients`,
    clientLogin: `${process.env.REACT_APP_BACKEND_URL}/clients/login?include=user`,
    popularMovies: `${process.env.REACT_APP_MOVIE_DB_BASE_URL}/movie/popular`,

    movieSearch: `${process.env.REACT_APP_BACKEND_URL}/movies/search`,

    addMovieToDiary: `${process.env.REACT_APP_BACKEND_URL}/diaries`,

    post: `${process.env.REACT_APP_MOVIE_DB_BASE_URL}/posts`,
})