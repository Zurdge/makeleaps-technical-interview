/* eslint-disable @typescript-eslint/no-empty-function */
import artists from '../data/artists';

export function Page() {
    const results = [...artists];

    return (
        <div>
            <h2 role="complementary">Average : {0}</h2>
            <input
                type="text"
                placeholder="search"
                aria-label="search"
                onChange={(e) => {}}
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
