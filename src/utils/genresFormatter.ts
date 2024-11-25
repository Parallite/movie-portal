import { Genre } from '@types';

export const genresFormatter = (genres: Genre[]): string => {
    const names = genres.map((genre) => genre.name[0].toUpperCase() + genre.name.slice(1));
    return names.join(', ');
};