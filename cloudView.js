const buildCloud = (countData, container, size) => {
    let data = {
        count: countData.count,
        rank: countData.rank,
        size: (size) ? size : 10,
        containerSize: 0
    };

    let cloudContainer = document.querySelector(container);
    cloudContainer.innerHTML = "";

    const populateContainer = () => {
        let top = data.size > data.rank.length ? data.rank.length : data.size;
        //let top = data.size > data.rank.length ? data.rank.length : data.rank.length;

        for(let i = 0; i < top; i ++) {
            cloudContainer.innerHTML += `<div class="cloud-word" data-size=${data.count[data.rank[i]]}>${data.rank[i]}</div>\n`; 
        }
    };
    const setContainerSize = () => {
        for(w in data.count) {
            data.containerSize += data.count[w];
        }
    };

    const sizeWords = () => {
        let words = document.getElementsByClassName('cloud-word');
        let topPercent = data.count[data.rank[0]] / data.containerSize;
        let multiplier = 100 / topPercent;

        for(let i = 0; i < words.length; i ++) {
            let width = ( words[i].dataset.size / data.containerSize ) * multiplier; 
            let height = ( words[i].dataset.size / data.containerSize ) * multiplier;

            words[i].style.width = width + "%"; 
            words[i].style.height = height + "%";
            words[i].style["line-height"] = height + "px";
            //words[i].style["font-size"] = width + '%';
        }
        textFit(words);
    };   

    populateContainer();
    setContainerSize();
    sizeWords();
}