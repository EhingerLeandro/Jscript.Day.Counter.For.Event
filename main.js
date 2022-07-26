let events=[];
let arr= [];

const eventName = document.getElementById("eventName");
const eventDate = document.getElementById("eventDate");
const buttonAdd = document.getElementById("bAdd");
const eventsContainer = document.querySelector("#eventsContainer");

document.querySelector("form").addEventListener('submit', evento=>{
	evento.preventDefault();
	addEvent();
});

function addEvent(){
	if(eventName.value ===""|| eventDate.value ===""){
		return;
	}
	if(dateDif(eventDate.value) < 0){
		return;
	}
	const newEvent = {
		id: (Math.random() *100).toString(36).slice(3),
		name: eventName.value,
		date: eventDate.value,

	};
	events.unshift(newEvent);
	eventName.value="";
	renderEvents();
}
function dateDif(d){
	const targetDate = new Date(d);
	const today = new Date();
	const difference = targetDate.getTime() - today();
	const days =  Math.ceil(difference/(1000 * 3600 * 24));
	return days
}

