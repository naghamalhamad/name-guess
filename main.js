
  
     //create input filed
     'use strict'
     const btn = document.querySelector('.btn');
     const inputContainer = document.querySelector('.inputContainer');
     inputContainer.addEventListener('click',function(e){
     e.preventDefault();
     const inputtext=document.querySelector('.inputtext');
     
     });
   
    //check input one-word entering
    //DOM file
    const inputtext = document.querySelector('.inputtext');
    const container = document.querySelector('.container');
    const card= document.querySelector('.card');
    const showgender= document.querySelector('.gendertext');
    function validate(){
    const validinput=inputtext.value.split(' ');

  
    if(validinput.length===1){
    //if the input is valid 

      //get the data using fetch and promise.all
      //API file
      const inputvalue= inputtext.value;
      Promise.all([fetch('https://api.genderize.io?name='+inputvalue)
      .then((response)=> response.json()),
      fetch( 'https://api.nationalize.io?name='+inputvalue)
      .then((response)=> response.json()),
      fetch('https://api.agify.io?name='+inputvalue)
      .then((response)=> response.json())
     
])

    // show the flag of the countries
    //DOM File   
    .then((json)=> {
    const gender = json[0].gender;
    const country = json[1].country[0].country_id; 
    const age = json[2].age;

     // get the countries id
     //API file
     fetch('https://restcountries.com/v3.1/alpha?codes='+country)
     .then((response)=> response.json())
     .then ((json) => {

      const showflag1= document.createElement('img');
      const showflag2= document.createElement('img');
      const showflag3= document.createElement('img');
      const flags= document.querySelector('.flags');
      showflag2.classList.add('flag1');
      showflag2.src=json[0].flags.svg;
      flags.appendChild(showflag2);
     })

    //show age in html doc
    const showage=document.querySelector('.age');
    const agecontainer=document.querySelector('.agecontainer');
    const agevalue= showage.innerText= 'Age: '+age;
    agecontainer.appendChild(showage);
  
    //save names in local storage and display them on html
     const namespan = document.querySelector('span');
     const saveName = document.createElement('p');
     localStorage.setItem('names',JSON.stringify(inputvalue));
     saveName.innerText = JSON.parse(localStorage.getItem('names'));
     namespan.appendChild(saveName);

   
    //check the gender and show the result
    const gendertxt= document.querySelector('.gendertxt');
    if (gender==='male'){
       const showmale= document.createElement('img');
       showmale.classList.add('male');
       showmale.src='male.svg';
       gendertxt.appendChild(showmale);
      
      }

    else{
      const showfemale= document.createElement('img');
       showfemale.classList.add('female');
       showfemale.src='female.svg';
       gendertxt.appendChild(showfemale);
      
    }
   
 
    function cleardata(){
      if(agevalue.length !== 0 ){
     console.log('hi');
      }
    };
    })
   

    }
    else{
    alert('Sorry I can\'t take your input.');
    }
    };



   

