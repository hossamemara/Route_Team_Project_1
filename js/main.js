let navBarLink=document.getElementsByClassName('nav-link');
let homeContent=document.getElementById('home-content');
let navToogler=document.getElementById('navbar-toggler');
let navUl=document.getElementById('navbar-nav-ul');

navToogler.addEventListener('click',function()
{
    homeContent.classList.remove('d-flex')
    homeContent.classList.add('d-none')
    navUl.classList.add('bg-secondary')
    
})
$(window).resize(function() {
    
    if(window.matchMedia("(min-width: 991px)").matches)
    {
        navUl.classList.remove('bg-secondary')
    }
    if(window.matchMedia("(max-width: 991px)").matches)
    {
        navUl.classList.add('bg-secondary')
        navUl.classList.add('text-center')
    }
  });


for(var i=0;i<navBarLink.length;i++)
{
    navBarLink[i].addEventListener('click',function(eventInfo){getClickedLink})
}
function getClickedLink()
{
    
}

