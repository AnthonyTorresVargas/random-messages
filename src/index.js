const messages = [
    "Anthony",
    "Alee",
    "junior",
    "paola",
    "cristofer",
    "mily",
    "matthew",
    "josselyn"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg }