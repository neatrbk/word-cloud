cloudMaker = (function() {
    let cloud = {
        data: {
            text: null,
            count: {}
        },

        tests: import('./regTest.js'),

        setText: function(txt) {
            this.data.text = txt;
        },

        getData: function() {
            return this.data.count;
        },

       cleanText: function() {
           let txt = this.data.text;
           let re = /[a-zA-Z]/;
           let words = txt.split(" ");

           let cleanTxt = words.map(function(w) {
               return w.split("").filter(function(l) {
                   return re.test(l);
               }).join("");
           });
           return cleanTxt;
       },

       removeBasic: function() {
           let txtObj = this.data.count;
            for(p in txtObj) {
                if(this.tests.isCommonWord(p)) {
                    delete textObj.p;
                }
            }
       },
       
      countText: function(txtArray) {
          for(let i = 0; i < txtArray.length; i++) {
             let count = this.data.count;

             if(count.hasOwnProperty(txtArray[i])) {
                count[txtArray[i]] ++;                
             } 

             else {
                count[txtArray[i]] = 1;
             }
          }
         //return this.data.count; 
      }
    };

    return cloud;
})();

export default cloudMaker;