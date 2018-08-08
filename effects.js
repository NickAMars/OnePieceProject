//alert('Hello World im home');


$('.nav__menu-link').on('click', function(){
  //console.log("working");
  // $('.nav__list').fadeToggle();
  $('.nav__list').fadeToggle(1000);
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
