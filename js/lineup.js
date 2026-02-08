const baseHtml1 = document.querySelector('.item1.js-base');
const baseHtml2 = document.querySelector('.item2.js-base');
const baseHtml3 = document.querySelector('.item3.js-base');
const baseHtml4 = document.querySelector('.item4.js-base');
const baseHtml5 = document.querySelector('.item5.js-base');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
const container5 = document.querySelector('.container5');
const apiURL = 'https://script.google.com/macros/s/AKfycbxxbQx3sr4--LVgBUnSsX-4ijXFOaKC0WVa0m5tp6ZHbM7Hn0ofNUzDevkjLxdSJXgY2Q/exec'; //frame 23 list

function loadingDissapear() {
    const spinner = document.querySelector('.loading');
    spinner.classList.add('loaded');
  }

async function loadData() {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    await loadingDissapear();
  
    data.forEach(entry => {
        if (entry.sell == '1') {
            if (entry.cat1 == 'bundle') {
                const copy = baseHtml1.cloneNode(true);
                copy.classList.remove('js-base');
                copy.querySelector('.item-name1').textContent = entry.name_en;
                copy.querySelector('.item-img1').src = 'img/frames/' + entry.imgs[0];
    
                let link = copy.querySelector('.item-href1');
                link.setAttribute('href', 'detail.html?code=' + entry.code);
                container1.appendChild(copy);
            };
    
            if (entry.cat1 == 'elementals') {
                const copy = baseHtml2.cloneNode(true);
                copy.classList.remove('js-base');
                copy.querySelector('.item-name2').textContent = entry.name_en;
                copy.querySelector('.item-img2').src = 'img/frames/' + entry.imgs[0];
    
                let link = copy.querySelector('.item-href2');
                link.setAttribute('href', 'detail.html?code=' + entry.code);
                container2.appendChild(copy);
            };

            if (entry.cat1 == 'accesories') {
                const copy = baseHtml3.cloneNode(true);
                copy.classList.remove('js-base');
                copy.querySelector('.item-name3').textContent = entry.name_en;
                copy.querySelector('.item-img3').src = 'img/frames/' + entry.imgs[0];
    
                let link = copy.querySelector('.item-href3');
                link.setAttribute('href', 'detail.html?code=' + entry.code);
                container3.appendChild(copy);
            };

            if (entry.cat1 == 'connectors') {
                const copy = baseHtml4.cloneNode(true);
                copy.classList.remove('js-base');
                copy.querySelector('.item-name4').textContent = entry.name_en;
                copy.querySelector('.item-img4').src = 'img/frames/' + entry.imgs[0];
    
                let link = copy.querySelector('.item-href4');
                link.setAttribute('href', 'detail.html?code=' + entry.code);
                container4.appendChild(copy);
            };

            if (entry.cat1 == 'justforfun') {
                const copy = baseHtml5.cloneNode(true);
                copy.classList.remove('js-base');
                copy.querySelector('.item-name5').textContent = entry.name_en;
                copy.querySelector('.item-img5').src = 'img/frames/' + entry.imgs[0];
    
                let link = copy.querySelector('.item-href5');
                link.setAttribute('href', 'detail.html?code=' + entry.code);
                container5.appendChild(copy);
            };
        }
    });
  }
  
  loadData();
