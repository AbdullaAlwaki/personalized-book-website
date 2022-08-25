const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

let ul = document.querySelector('.book-list');
ul.classList.add('row','row-cols-1','row-cols-md-5','g-4')
for(let i=0;i<books.length; i++ ){
  let bigDiv = document.createElement('div')
  bigDiv.classList.add('col','justify-content-between');

  let chDiv = document.createElement('div');
  chDiv.classList.add('card','p-0');
  
  let img = document.createElement('img');
  img.src = books[i].img;
  img.classList.add('card-img-top','h-50','w-100','border', 'border-dark');

  let minDiv1 = document.createElement('div'); 
  minDiv1.classList.add('card-body')
  let h5 = document.createElement('h5');
  h5.classList.add('card-title');
  h5.innerHTML = books[i].title;
  let p = document.createElement('p');
  p.classList.add('card-text','text-muted')
  p.innerHTML = books[i].author;

  let minDiv2 = document.createElement('div');
  minDiv2.classList.add('card-footer');
  let small = document.createElement('small');
  

  if(books[i].alreadyRead){
    small.innerHTML = `Read` 
    small.classList.add('text-light','bg-success',"rounded",'p-2');
  }else{
     small.innerHTML = `To read`;
     small.classList.add('bg-secondary','text-light',"rounded",'p-2');

  }
  
  

  minDiv1.append(h5,p);
  minDiv2.append(small)
  chDiv.append(img, minDiv1,minDiv2);
  ul.append(chDiv)

};
