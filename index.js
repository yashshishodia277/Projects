console.log("Hello buddy")
// 1.we remove cross sign
document.querySelector('.cross').style.display = 'none';
// 2.we want that on click on ham icon  sidebar shown and on cross it gone back..
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    // contains is a function 
    if(document.querySelector('sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'

    }
    else{
       document.querySelector('.ham').style.display='none'
       setTimeout(() => {
           document.querySelector('.cross').style.display='inline'
        
       }, 350);
     

    }
})