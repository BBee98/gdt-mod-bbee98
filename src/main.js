import './templates/game-definition.jsx';
import './features/game-development-choose-theme.jsx';
import './data.js';

GDT.loadJs([GDT.getRelativePath() + '/main.js',
], () => {}, (error) => {
    console.error(error);
});
