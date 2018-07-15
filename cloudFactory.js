const getWordCount = (txt) => {
   let data = {
       text: txt,
       textAr: [],
       count: {},
       rank: []
   }; 

    const isCommonWord = (w) => {
        let commonWords = ["a", "able", "about", "across", "after", "all", "almost",
			"also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because",
			"been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does",
			"either", "else", "ever", "every", "for", "from", "get", "got", "had", "has",
			"have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in",
			"into", "is", "it", "its", "just", "least", "let", "like", "likely", "may",
			"me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of",
			"off", "often", "on", "only", "or", "other", "our", "own", "rather", "said",
			"say", "says", "she", "should", "since", "so", "some", "than", "that", "the",
			"their", "them", "then", "there", "these", "they", "this", "tis", "to", "too",
			"twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which",
			"while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your",
			"ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't",
			"don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd",
			"i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've",
			"mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't",
			"that'll", "that's", "there's", "they'd", "they'll", "they're", "they've",
			"wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd",
			"when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll",
			"who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd",
            "you'll", "you're", "you've"];

		return ( commonWords.indexOf(w) !== -1 )
	}; 

   const cleanText = () => {
           let txt = data.text;
           console.log(txt);
           let re = /[a-zA-Z]/;
           let words = txt.split(" ");

           let cleanTxt = words.map(function(w) {
               return w.split("").filter(function(l) {
                   return re.test(l);
               }).join("").toLowerCase();
           });

         return cleanTxt; 
    };

   const removeBasic = () => {
        for(w in data.count) {
            if(isCommonWord(w) || w == "" || w.length <= 1) {
                delete data.count[w];
            }
        }
    };

   const countText = () => {
       for(w in data.textAr) {
            let count = data.count;
            let word = data.textAr[w];
            count.hasOwnProperty(word) ? count[word] ++ : count[word] = 1;
       }
    }; 

    const makeRank = () => {
       let rank =[];
       let max = 0;
         
       for(w in data.count) {
            rank.push(w);
       } 

       data.rank =  rank.sort((a, b) => data.count[b] - data.count[a]);
    };

    const buildData = () => {
        let cleaned = cleanText();
        data.textAr = cleaned;
        countText();
        removeBasic();
        makeRank();
    };

    buildData();
    return ({
        count: data.count,
        rank: data.rank
    });
};

//export default getWordCount; 

//console.log(getWordCount("one two three two three four three four four four"));