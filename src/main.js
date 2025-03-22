import EXTRA_TOPICS from "./topics/index.js";
import TopicDTO from "./utils/topic-DTO.js";

// eslint-disable-next-line no-undef
Topics.topics.push(TopicDTO(EXTRA_TOPICS))

// eslint-disable-next-line no-undef
GDT.loadJs([GDT.getRelativePath() + '/main.js',
], () => {}, (error) => {
    console.error(error);
});
