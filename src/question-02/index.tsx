import artists from '../data/artists.json'

export const Page = ()=>{

    return <div>
        <input type='text' placeholder='search' aria-label='search'/>
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
                {artists.map((artist)=><tr>
                    <td>{artist.name}</td>
                    <td>{artist.type}</td>
                    <td>{artist.albums}</td>
                    <td>{artist.fans}</td>
                </tr>)}
                
            </tbody>
        </table>
    </div>
}
