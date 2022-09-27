import {useMemo, useState} from 'react';
import artists from '../data/artists';

export function Page() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const results = useMemo(
        () =>
            artists.filter((artist) =>
                new RegExp(searchQuery, `gi`).test(artist.name)
            ),
        [searchQuery]
    );

    const getAverage =
        artists
            .map(({fans}) => fans)
            .reduce(
                (previousValue, currentValue) => previousValue + currentValue
            ) / artists.length;

    return (
        <div>
            <h2 role="complementary">Average : {getAverage}</h2>
            <input
                type="text"
                placeholder="search"
                aria-label="search"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Artists</th>
                    </tr>
                    <tr>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Albums</th>
                        <th>Fans</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((artist) => (
                        <tr key={artist.index}>
                            <td>{artist.name}</td>
                            <td>{artist.type}</td>
                            <td>{artist.albums}</td>
                            <td>{artist.fans}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
