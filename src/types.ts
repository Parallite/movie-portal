// Responses

export interface ISearchResponse {
    docs: TMovies
    total: number
    limit: number
    page: number
    pages: number
}

export interface IReviewsResponse {
    docs: TReviews,
    total: number,
    limit: number,
    page: number,
    pages: number,
}

// Users

export interface IUser {
    id: number,
    name: string,
    isLogged: boolean,
}

export type TUsers = IUser[];

// Reviews

export interface IReview {
    id: number,
    movieId: number,
    title: string,
    type: string,
    review: string,
    date: string,
    author: string,
    authorId: number,
    userRating: number,
    updatedAt: string,
    createdAt: string
}

export type TReviews = IReview[];

// Movies

export type TMovies = IMovie[];

export interface IMovie {
    id: number
    name: string
    alternativeName: string
    enName: string
    type: string
    year: number
    description: string
    shortDescription: string
    movieLength: number
    names: Name[]
    externalId: ExternalId
    logo: Logo
    poster: Poster
    backdrop: Backdrop
    rating: Rating
    votes: Votes
    genres: Genre[]
    countries: Country[]
    releaseYears: ReleaseYear[]
    isSeries: boolean
    ticketsOnSale: boolean
    totalSeriesLength: number
    seriesLength: number
    ratingMpaa: string
    ageRating: number
    top10: number
    top250: number
    typeNumber: number
    status: string
    internalNames: string[]
    internalRating: number
    internalVotes: number
}

interface Name {
    name: string,
    language: string,
    type: string
}

interface ExternalId {
    kpHD: string
    imdb: string
    tmdb: number
}

interface Logo {
    url: string
}

interface Poster {
    url: string
    previewUrl: string
}

interface Backdrop {
    url: string
    previewUrl: string
}

interface Rating {
    kp: number
    imdb: number
    tmdb: number
    filmCritics: number
    russianFilmCritics: number
    await: unknown
}

interface Votes {
    kp: number
    imdb: number
    tmdb: number
    filmCritics: number
    russianFilmCritics: number
    await: unknown
}

interface Country {
    name: string
}

interface ReleaseYear {
    start: number
    end: number
}

// Movie details

export type TDetails = IMovieDetails[]

export interface IMovieDetails {
    fees: Fees
    status: unknown
    externalId: ExternalId
    rating: Rating
    votes: Votes
    backdrop: Backdrop
    movieLength: number
    images: Images
    productionCompanies: ProductionCompany[]
    spokenLanguages: SpokenLanguage[]
    id: number
    type: string
    name: string
    description: string
    distributors: Distributors
    premiere: Premiere
    slogan: string
    year: number
    budget: Budget
    poster: Poster
    facts: Fact[]
    genres: Genre[]
    countries: Country[]
    seasonsInfo: unknown[]
    persons: Person[]
    lists: string[]
    typeNumber: number
    alternativeName: string
    enName: string,
    names: Name[]
    updatedAt: string
    ratingMpaa: string
    shortDescription: string
    technology: Technology
    ticketsOnSale: boolean
    sequelsAndPrequels: SequelsAndPrequel[]
    imagesInfo: ImagesInfo
    similarMovies: SimilarMovy[]
    ageRating: number
    logo: Logo
    watchability: Watchability
    top10: unknown
    top250: number
    audience: Audience[]
    deletedAt: unknown
    isSeries: boolean
    seriesLength: unknown
    totalSeriesLength: unknown
    networks: unknown
    videos: Videos
}

interface Fees {
    world: World
    russia: Russia
    usa: Usa
}

interface World {
    value: number
    currency: string
}

interface Russia {
    value: number
    currency: string
}

interface Usa {
    value: number
    currency: string
}

interface ExternalId {
    imdb: string
    tmdb: number
    kpHD: string
}

interface Rating {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: unknown
}

interface Votes {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: unknown
}

interface Backdrop {
    url: string
    previewUrl: string
}

interface Images {
    postersCount: number
    backdropsCount: number
    framesCount: number
}

interface ProductionCompany {
    name: string
    url: string
    previewUrl: string
}

interface SpokenLanguage {
    name: string
    nameEn: string
}

interface Distributors {
    distributor: string
    distributorRelease: string
}

interface Premiere {
    world: string
    russia: string
    bluray: string
    dvd: string
    cinema: unknown
    digital: unknown
}

interface Budget {
    value: number
    currency: string
}

interface Poster {
    url: string
    previewUrl: string
}

interface Fact {
    value: string
    type: string
    spoiler: boolean
}

export interface Genre {
    name: string
}

interface Country {
    name: string
}

interface Person {
    id: number
    photo: string
    name?: string
    enName?: string
    description?: string
    profession: string
    enProfession: string
}

interface Name {
    name: string
    language: string
    type: string
}

interface Technology {
    hasImax: boolean
    has3D: boolean
}

interface SequelsAndPrequel {
    id: number
    name: string
    alternativeName: string
    enName: unknown
    type: string
    poster: Poster2
    rating: Rating2
    year: number
}

interface Poster2 {
    url: string
    previewUrl: string
}

interface Rating2 {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: unknown
}

interface ImagesInfo {
    framesCount: number
}

interface SimilarMovy {
    id: number
    name: string
    enName: unknown
    alternativeName: string
    type: string
    poster: Poster3
    year: number
    rating: Rating3
}

interface Poster3 {
    url: string
    previewUrl: string
}

interface Rating3 {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: unknown
}

interface Logo {
    url: string
}

interface Watchability {
    items: unknown[]
}

interface Audience {
    count: number
    country: string
}

interface Videos {
    trailers: Trailer[]
}

interface Trailer {
    url: string
    name: string
    site: string
    type: string
}

export interface IFavoriteMovie {
    id: number,
    name: string,
    rating: number,
    poster: string
}

export type TFavoriteMovies = IFavoriteMovie[]