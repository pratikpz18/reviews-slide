const reviews=[
	{
		id:1,
		name: "PUhbjg jgyhnbvg",
		job:"ewb ngyth",
		img:"profile.jpg",
		content:"Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. Attention affection at my preferred offending shameless me if agreeable.",
	},
	{
		id:2,
		name: "nhfrf mgjjyvg",
		job:"jik nnjkj",
		img:"profile1.jpeg",
		content:"Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.",
	},
	{
		id:3,
		name: "PRgd Ajhjdf",
		job:"kol piouh",
		img:"profile2.jpg",
		content:"Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so.",
	},
];

const img=document.querySelector(".profileimg");
const nm=document.querySelector(".name");
const job=document.querySelector(".job");
const content=document.querySelector(".content");
const prev=document.querySelector(".pre");
const next=document.querySelector(".nxt");

let current=0;

window.addEventListener('DOMContentLoaded', function () {
	show(current);

})

function show(person) {
 	const i=reviews[person]; 
 	img.src=i.img;
 	nm.textContent=i.name;
 	job.textContent=i.job;
 	content.textContent=i.content;
}

next.addEventListener('click',function(){
 	current++;
 	if(current > reviews.length - 1){
 		current=0;
 	}
 	show(current);
})

prev.addEventListener('click',function(){
 	current--;
 	if(current < 0){
 		current=reviews.length - 1;
 	}
 	show(current);
})
