import {ApiHook} from '../data/fake-api-hook';
import {arrow} from './style';

interface ArrowProps {
    type: 'down' | 'up';
}
function Arrow({type}: ArrowProps) {
    return (
        <div style={arrow}>
            <img alt="arrow" src={`/${type}.png`} />
            <div>123</div>
        </div>
    );
}

function CardComponent() {
    return (
        <div
            style={{
                backgroundColor: 'rgb(200,0,0,0.5)',
                borderRadius: 5,
                padding: 16,
                borderWidth: 2,
                borderColor: 'r',
            }}
        >
            <h3>Stock component</h3>
            <h5>Stock information for &apos;Noisy Library INC&apos;</h5>
            <div style={{display: 'flex'}}>
                <Arrow type="up" />
                <Arrow type="up" />
                <Arrow type="up" />
                <Arrow type="up" />
            </div>
        </div>
    );
}

export function Page() {
    const data = ApiHook();

    return (
        <div style={{float: 'left', margin: 5}}>
            <CardComponent />
        </div>
    );
}
