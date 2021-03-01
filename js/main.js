
const clickButton=document.querySelector('.togglebtn');

clickButton.addEventListener('click',() => {
	document.querySelector('nav').classlist.toggle('show-nav');
})

//i fucked something up somewhere idk where, it wont work properly, ask for assistance later