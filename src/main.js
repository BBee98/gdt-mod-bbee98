import './utils/topic-DTO.js';
import './app.jsx';

(() => {

    // eslint-disable-next-line no-undef
    GDT.loadJs(
        // eslint-disable-next-line no-undef
        [GDT.getRelativePath() + '/main.js'],
        () => {},
        (error) => {
            console.error(error);
        }
    );
})();