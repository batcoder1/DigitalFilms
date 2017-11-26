export interface IMovie {
    poster_path: string;
    backdrop_path: string;
    overview: string;
    id: number;
    original_title: string;
    favorite: boolean;
}

export interface LoginResponse {
    message: string;
    token: string;
}
export interface LoginRequest {
    username: string;
    password: string;
}

export class Movie implements IMovie {
    poster_path: string;
    backdrop_path: string;
    overview: string;
    id: number;
    original_title: string;
    favorite: boolean;
}

