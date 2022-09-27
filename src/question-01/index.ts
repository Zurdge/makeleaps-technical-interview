import artists from '../data/artists';

/*
This function should return the object with a matching artist name
*/
export const findByName = (name: string) =>
    artists.find((artist) => artist.name === name);

/*
This should sort the artists from most popular to least OR  least popular to most popular
*/
export const sortByPopularity = (direction: 'asc' | 'desc' = 'asc') =>
    [...artists].sort((a, b) =>
        direction === 'asc'
            ? a.fans > b.fans
                ? -1
                : 1
            : a.fans > b.fans
            ? 1
            : -1
    );
