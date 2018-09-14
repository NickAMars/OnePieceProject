$('.nav__menu-link').on('click', function(){
  $('.nav__list').fadeToggle(1000);
});

$(window).scroll( () => {
  let wScroll = $(this).scrollTop();
  let body = document.querySelector('body');
  if(wScroll > $('.meet').offset().top){
    $('.nav').fadeOut(1000);
  }else {
    $('.nav').fadeIn(1000);
  }
});


const sizeUpdate = ()=>{
  let width = document.documentElement.clientWidth;
  let list =  document.querySelector('.nav__list');

  if(width > 600) return list.style.display = 'flex';

  return  list.style.display = 'none';

}
/*
  triggers an event if the screen size change
*/
window.addEventListener('resize',sizeUpdate);

//testing config variable set for git
