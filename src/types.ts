export interface Card {
    id: number,
    title: string,
    picture: string,
    rating: number,
    isFavorite: boolean
}

export type CardList = Card[];

export interface User {
    id: number,
    name: string,
    isLogged: boolean
}

export type UserList = User[];