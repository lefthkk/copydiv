const clip = document.getElementById('clip');
const clips = document.getElementById('clips');
const div = document.querySelectorAll('div');
const nodes = [];

div[2].addEventListener('click', my);
div[3].addEventListener('click', my);
div[5].addEventListener('click', my);
div[6].addEventListener('click', my);

function sekil(){
        const txt = document.createElement('p');
        txt.setAttribute('id', 'copied');
        txt.innerText = 'copied';
        const clips = document.getElementById('clips');

        clips.innerText = 'copied';
        setTimeout(function(){

                clips.innerText = '';
        },2000);
}

function my(e){
      let node = document.createTextNode(e.target.textContent);
      //clip.appendChild(node);
      if(!(nodes.includes(e.target.textContent))){
      nodes.push(node.textContent);
      const addp = document.createElement('p');
      addp.innerText = node.textContent
      clip.appendChild(addp);
      sekil()
       
}
        }

