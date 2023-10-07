/* LESSON 3 - Programming Tasks */
const hb_ = document.getElementById('hobbies');
hb_.style.marginLeft = '4.8rem';
/* Profile Object  */

let  myProfile = {
    name : "Augusto Achá",
    photo : "augusto.jpg",
    favoriteFoods : [ // es un Array!
                     'Past',
                     'pizza',
                     'meat balls',
                     'soup',
                     'tacos'
                    ],
    hobbies : [
               'Learn Javascript',
               'play guitar',
               'have lunch with Alma',
               'biking' 
    ],     
    
    placesLived : [

                    {
                        place  : 'Jujuy, ARG',
                        length : '1 year'
                    },
                    {
                        place  : 'Salta, ARG',
                        length : '10 year'
                    },
                  ],       
};

myProfile.placesLived.push(
    {
        place  : 'Chaco, ARG',
        length : '1 year'
    },
    {
        place  : 'Corrientes, ARG',
        length : '10 year'
    },
    {
        place  : 'Santiago, ARG',
        length : '7 year'
    },
);

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.forEach((item) =>{
    //pointer to dl
    let plived = document.querySelector('#places-lived');
    plived.style.marginLeft = '45px'
    let dt_ = document.createElement('dt');
    let dd_ = document.createElement('dd'); 
    dt_.innerHTML = item.place;
    dd_.innerHTML = item.length;
    plived.append(dt_, dd_ );
});

/* DOM Manipulation - Output */

/* Name */
const id_ = document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const photo_ = document.querySelector('#photo');
photo_.setAttribute('src','augusto.jpg');
photo_.setAttribute('alt',`${myProfile.name}`);
photo_.setAttribute('title','augusto');

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    //let fav_food = document.querySelector('#favorite-foods');
    let li_ = document.createElement('li');
    li_.textContent = food;    
    document.querySelector('#favorite-foods').appendChild(li_);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    const hobb_ = document.querySelector('#hobbies');
    let li = document.createElement('li');
    li.textContent = hobby;    
    hobb_.appendChild(li);
});

/* Places Lived DataList */


