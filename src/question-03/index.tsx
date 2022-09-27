import {ApiHook} from '../data/fake-api-hook';

interface ArrowProps {
    type: 'down' | 'up';
}
function Arrow({type}: ArrowProps) {
    return <img alt="arrow" src={`/${type}.png`} />;
}

export function Page() {
    const data = ApiHook();

    return (
        <div
            style={{
                padding: 5,
                borderRadius: 5,
                borderStyle: 'solid',
                borderColor: 'red',
                borderWidth: 2,
            }}
        >
            <Arrow type="down" />
            <Arrow type={data.direction} />
        </div>
    );
}
