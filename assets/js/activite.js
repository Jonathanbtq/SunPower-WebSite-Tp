//apparaition des images

const elem1 = document.querySelector('.symbol1');
const elem2 = document.querySelector('.symbol2');
const elem3 = document.querySelector('.symbol3');

const qtrdiv = document.querySelector('.act_com_img');

window.addEventListener('scroll', () => {
  const {scrollTop, clientHeight} = document.documentElement;

  const topElementToTopViewport = elem1.getBoundingClientRect().top;
  const topElementToTopViewport2 = elem2.getBoundingClientRect().top;
  const topElementToTopViewport3 = elem3.getBoundingClientRect().top;
  const topElementToTopViewportdiv = qtrdiv.getBoundingClientRect().top;

  if(scrollTop  > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80){
    elem1.classList.add('active');
  }
  if(scrollTop  > (scrollTop + topElementToTopViewport2).toFixed() - clientHeight * 0.80){
    elem2.classList.add('active');
  }
  if(scrollTop  > (scrollTop + topElementToTopViewport3).toFixed() - clientHeight * 0.80){
    elem3.classList.add('active');
  }
  if(scrollTop  > (scrollTop + topElementToTopViewportdiv).toFixed() - clientHeight * 0.80){
    qtrdiv.classList.add('active');
  }
})

function move(div){
  const {scrollTop, clientHeight} = document.documentElement;

  const img = div.getBoundingClientRect().top;

  if(scrollTop  > (scrollTop + img).toFixed() - clientHeight * 0.80){
    div.classList.add('active');
  }
}