import {useMemo, useState} from 'react';
import artists from '../data/artists';

export const Page = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const results = useMemo(() => {
        return artists.filter((artist) => artist.name.includes(searchQuery));
    }, [searchQuery]);

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Average fans</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Unique genres</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                    {artists.map((artist) => (
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
