let url = new URL(window.location.href);
let params = url.searchParams;
const code = params.get('code');
console.log(code);
const apiURL = 'https://script.google.com/macros/s/AKfycbxxbQx3sr4--LVgBUnSsX-4ijXFOaKC0WVa0m5tp6ZHbM7Hn0ofNUzDevkjLxdSJXgY2Q/exec'; //frame 23 list

function loadingDissapear() {
    const spinner = document.querySelector('.loading');
    spinner.classList.add('loaded');
  }

const baseHtml = document.querySelector('.bl_imgSwitcher_btn.js-base');
async function loadData() {
    const response = await fetch(apiURL);
    const data = await response.json();
    // console.log(data);

    await loadingDissapear();
  
    data.forEach(entry => {
        if (entry.code == code) {
            document.querySelector('title').textContent = entry.name_en + ' | frame 23'
            document.querySelector('.name_en').textContent = entry.name_en;
            document.querySelector('.name_jp').textContent = entry.name_jp;
            document.querySelector('.mainimg').src = 'img/frames/noimg_square.png';
            document.querySelector('.price').textContent = '￥' + entry.price + '（税込）';
            document.querySelector('.material').textContent = '素材：' + entry.material;
            document.querySelector('.comment').textContent = entry.comment_jp;

            for (let i = 0; i < entry.imgs.length; i++) {
              const copy = baseHtml.cloneNode(true);
              copy.classList.remove('js-base');
              copy.querySelector('.thumbimg').src = 'img/frames/' + entry.imgs[i];
              document.querySelector('.bl_imgSwitcher_thumb').appendChild(copy);
            };
        }
    });

    const imgSwitcher = await document.getElementById('js_imgSwitcher');
    if (imgSwitcher) {
      const mainImg = document.querySelector('.bl_imgSwitcher_main img');
      const thumbBtns = document.querySelectorAll('.bl_imgSwitcher_btn');
      // １番目のサムネイル画像をメイン画像に適用し、.is_activeクラスを付与
      mainImg.src = thumbBtns[1].querySelector('img').src;
      mainImg.alt = thumbBtns[1].querySelector('img').alt;
      thumbBtns[1].classList.add('is_active');
      // サムネイル画像がフォーカスされたときの処理
      thumbBtns.forEach(thumbBtn => {
        thumbBtn.addEventListener('focus', switchImage);
      });
      function switchImage() {
        const img = this.querySelector('img');
        mainImg.style.transition = 'opacity .3s ease-out';
        mainImg.style.opacity = 0;
        setTimeout(() => {
          mainImg.src = img.src;
          mainImg.alt = img.alt;
          mainImg.style.opacity = 1;
        }, 300);
        thumbBtns.forEach(thumbBtn => thumbBtn.classList.remove('is_active'));
        this.classList.add('is_active');
      }
    }
  }
  
  loadData();

  
    

  