function shout(string) {
    return string.toUpperCase()
};
// console.log (shout().toUppercase());

function whisper(string) {
    return string.toLowerCase()
};

function logShout(string) {
    console.log (`${string}`.toUpperCase())
};

function logWhisper(string) {
    console.log (`${string}`.toLowerCase())
};

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    } if (string.toUpperCase() === string) {
        return "YES INDEED!"
    } if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
};