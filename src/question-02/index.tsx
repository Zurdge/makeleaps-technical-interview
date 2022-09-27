import {useMemo, useState} from 'react';
import artists from '../data/artists';

export const Page = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const results = useMemo(() => {
        return artists.filter((artist) => artist.name.includes(searchQuery));
    }, [searchQuery]);

    return (
        <div>
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
};
