document.addEventListener('DOMContentLoaded', () => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}, view, Page Loaded`);
});

document.addEventListener('click', function(event) {
    const timestamp = new Date().toISOString();
    const targetTag = event.target.tagName;
    console.log(`${timestamp}, click, ${targetTag}`);
});

// Q3
function analyzeText(text) {
const totalLetters = text.replace(/[^A-Za-z]/g, "").length;
const totalWords = text.trim().split(/\s+/).filter(word => word).length;
const totalSpaces = (text.match(/ /g) || []).length;
const totalNewlines = (text.match(/\n/g) || []).length;
const totalSpecialSymbols = text.replace(/[A-Za-z0-9\s]/g, "").length;
const pronouns = ["i", "me", "you", "he", "him", "she", "her", "it", "we", "us", "they", "them"];
const prepositions = ["about", "above", "across", "after", "against", "along", "among", "around", 
                          "at", "before", "behind", "below", "beneath", "beside", "between", "beyond", 
                          "by", "despite", "down", "during", "except", "for", "from", "in", "inside", 
                          "into", "like", "near", "of", "off", "on", "onto", "out", "outside", "over", 
                          "past", "regarding", "since", "through", "throughout", "to", "toward", "under", 
                          "underneath", "until", "up", "upon", "with", "within", "without"];
const indefiniteArticles = ["a", "an"];
const wordsArray = text.toLowerCase().match(/\b\w+\b/g) || [];
let pronounCounts = {};
let prepositionCounts = {};
let articleCounts = {};
wordsArray.forEach(word => {
    if (pronouns.includes(word)) {
        pronounCounts[word] = (pronounCounts[word] || 0) + 1;
    }
    if (prepositions.includes(word)) {
        prepositionCounts[word] = (prepositionCounts[word] || 0) + 1;
    }
    if (indefiniteArticles.includes(word)) {
        articleCounts[word] = (articleCounts[word] || 0) + 1;
    }
});

return {
    letters: totalLetters,
    words: totalWords,
    spaces: totalSpaces,
    newlines: totalNewlines,
    specialSymbols: totalSpecialSymbols,
    pronounCounts: pronounCounts,
    prepositionCounts: prepositionCounts,
    articleCounts: articleCounts
    };
}

  document.getElementById('analyzeBtn').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const result = analyzeText(text);
    let output = "Text Analysis Results:\n";
    output += `Total Letters: ${result.letters}\n`;
    output += `Total Words: ${result.words}\n`;
    output += `Total Spaces: ${result.spaces}\n`;
    output += `Total Newlines: ${result.newlines}\n`;
    output += `Total Special Symbols: ${result.specialSymbols}\n\n`;

    output += "Pronoun Counts:\n";
    for (let key in result.pronounCounts) {
      output += `  ${key}: ${result.pronounCounts[key]}\n`;
    }

    output += "\nPreposition Counts:\n";
    for (let key in result.prepositionCounts) {
      output += `  ${key}: ${result.prepositionCounts[key]}\n`;
    }

    output += "\nIndefinite Article Counts:\n";
    for (let key in result.articleCounts) {
      output += `  ${key}: ${result.articleCounts[key]}\n`;
    }

    document.getElementById('analysisResult').textContent = output;
  });