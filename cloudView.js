const buildCloud = (countData, container, size) => {
    let data = {
        count: countData.count,
        rank: countData.rank,
        size: (size) ? size : 100 
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

    const sizeWords = () => {
        let words = document.getElementsByClassName('cloud-word');

        for(let i = 0; i < words.length; i ++) {
            let width = words[i].dataset.size / data.size; 
            let height = words[i].dataset.size / data.size;
            words[i].style.width = width + "%"; 
            words[i].style.height = height + "%";
            words[i].style["line-height"] = height + "px";
        }
    };   

    populateContainer();
    sizeWords();
}