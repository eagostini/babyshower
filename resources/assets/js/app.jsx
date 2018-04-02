import 'particles.js';

import App from './components/App.jsx';
import ReactDOM from 'react-dom';

particlesJS('particles', {
    "particles": {
        "number": {
            "value": 25
        },
        "color": {
            "value": ["#5BD2CB", "#D25BCD"]
        },
        "opacity": {
            "value": 0.15
        },
        "size": {
            "value": 20
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "retina_detect": true
});

ReactDOM.render(<App />, document.getElementById('app'));
