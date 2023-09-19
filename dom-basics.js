//add a paragraph to the body
const newParagraph=document.createElement('p');
newParagraph.innerText='Added with Javascript';
newParagraph.style.color='red';
newParagraph.style.fontSize="25px";
document.body.appendChild(newParagraph);

//add a image to the body
const img_=document.createElement('img');
//img_.setAttribute("src","https://placeholder.com/200");
img_.setAttribute('src','img/arbol.png');
img_.setAttribute('alt','imagen de un arbol');
img_.setAttribute('title','Arbol parecido a la hoja de un Eucaliptus');
document.body.appendChild(img_);

//add a list at once to the body
let newDiv = document.createElement('div');
newDiv.innerHTML='<ul><li>One</li><li>Two</li><li>Three</li></ul>';
document.body.appendChild(newDiv);

//add a section element to the body

let section_=document.createElement('section');
let h2_= document.createElement('h2');
let paragr_ = document.createElement('p');
paragr_.innerText="Welcome to Javascript Language";
h2_.textContent="CSE 121b";
h2_.style.width='200px';
h2_.style.margin="auto";
h2_.style.textAlign="center";
h2_.style.backgroundColor='pink';
section_.append(h2_, paragr_);
document.body.appendChild(section_);

//add another section at once to the body
let otroSection = document.createElement('section');
otroSection.style.margin="20px 300px";
otroSection.style.padding=".5rem";
otroSection.style.textAlign="center";
otroSection.style.backgroundColor="grey";
otroSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(otroSection);



