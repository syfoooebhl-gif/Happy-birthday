function go(){
document.getElementById("about").scrollIntoView({behavior:"smooth"});
}

let quiz=[
{
q:"When did we meet?",
a:["2015","2012","2018"],
c:1
},
{
q:"Where did we meet?",
a:["High school","Primary school","University"],
c:1
},
{
q:"Are we best friends?",
a:["No","Maybe","Yes of course"],
c:2
}
];

let i=0;

show();

function show(){
document.getElementById("msg").innerHTML="";
document.getElementById("next").style.display="none";

q.innerHTML=quiz[i].q;
answers.innerHTML="";

quiz[i].a.forEach((x,n)=>{
let b=document.createElement("button");
b.innerHTML=x;
b.onclick=()=>check(n);
answers.appendChild(b);
});
}

function check(n){
if(n==quiz[i].c){
msg.innerHTML="Correct 💗 You are amazing!";
}
else{
msg.innerHTML="Wrong 😄 but still my best friend!";
}
document.getElementById("next").style.display="block";
}

function next(){
i++;
if(i<quiz.length) show();
else msg.innerHTML="Quiz finished 🌸 Happy Birthday!";
}
function walkCheck(n){
if(n==1){
walkResult.innerHTML="Correct 😄 We went to the playground 💗";
}
else{
walkResult.innerHTML="Wrong 😉 Try again";
}
}
function awarenessCheck(n){
    let msg = document.getElementById("awarenessMsg");

    if(n===0){
        msg.innerHTML = `
        💌 Please don’t hurt yourself.
         I know life is not easy sometimes, but you are stronger than you think.
        You are not alone — your best friend from Marrakech is here for you,
        and I’m here for you too.
        We care about you deeply.
        Talk to us, share what’s in your heart, cry if you need to, but don’t give up.
        Your smile matters.
        Your life matters.
        And remember:
        we should never lose someone who is precious to us ❤️
        hcho
        `;
        msg.style.color = "#ff5fa2";
    } else {
        msg.innerHTML = "🌟 I'm so happy to hear that! Keep smiling and enjoying life 😄ya afdal intssar fi l3alam";
        msg.style.color = "#00c6ff";
    }
}

