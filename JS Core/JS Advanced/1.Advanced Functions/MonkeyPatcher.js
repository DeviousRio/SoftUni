let result = (function () {
    let commands = {
        upVote: (object) => object['upVotes'] += 1,
        downVote: (object) => object['downVotes'] += 1,
        score: (object) => {
            "use strict";
            let upVotes = object['upVotes'];
            let downVotes = object['downVotes'];
            let result = [];
            let obfuscationNumber = 0;
            let maxVotes;
            if ((upVotes + downVotes) > 50) {
                maxVotes = Math.max(upVotes, downVotes);
                obfuscationNumber = Math.ceil(0.25 * maxVotes);
            }
            result.push(upVotes + obfuscationNumber);
            result.push(downVotes + obfuscationNumber);
            result.push(upVotes - downVotes);
            let rating = getRating(object);
            result.push(rating);
            return result;
        },
        call: (object, args) => {
            return commands[args](object);
        }
    };
    return commands;

    function getRating(object) {
        let upVotes = object['upVotes'];
        let downVotes = object['downVotes'];
        let totalVotes = upVotes + downVotes;
        let balance = upVotes - downVotes;

        if (totalVotes < 10) {
            return 'new';
        }
        if ((upVotes / totalVotes) > 0.66) {
            return 'hot';
        }
        if ((downVotes / totalVotes <= 0.66) && balance >= 0 && (upVotes > 100 || downVotes > 100)) {
            return 'controversial';
        }
        if (balance < 0 && totalVotes >= 10) {
            return 'unpopular';
        }
        return 'new';
    }
})();

let forumPost = {
    id: '3',
    author: 'email',
    content: 'wazaaaaa',
    upVotes: 100,
    downVotes: 100
};