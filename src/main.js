import './utils/topic-DTO.js'
// import './templates/topic-list-container/topic-list-container.component.jsx';

( () => {
    // eslint-disable-next-line no-undef
    GDT.loadJs([GDT.getRelativePath() + '/main.js',
    ], () => {}, (error) => {
        console.error(error);
    });
})()
