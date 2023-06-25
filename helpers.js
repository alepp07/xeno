function getRandomFallback(fallbackArray) {
  const randomIndex = Math.floor(Math.random() * fallbackArray.length);
  return fallbackArray[randomIndex];
}

function findMatchingQuestion(message, qa_pairs) {
  const cleanedMessage = message.toLowerCase();

  for (const pair of qa_pairs) {
    for (const keyword of pair.keywords) {
      if (cleanedMessage.includes(keyword)) {
        return pair;
      }
    }
  }

  return null;
}

module.exports = {
  getRandomFallback,
  findMatchingQuestion,
};
