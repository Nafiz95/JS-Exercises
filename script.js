/* JavaScript code here */
//Task 1
console.log("-----JS EX 1-----");
console.log("External JS");

//Task 2
console.log("-----JS EX 2-----");
function sumArray(x)
{
    var sum=0;
    x.forEach(function(value, index) {
	sum = sum + value;
    });
	return sum;
}
console.log(sumArray([1,2,3]));

//Task 3
console.log("-----JS EX 3-----");
function emailvalidation(address)
{

    var check=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = check.test(address);
    return match;
}
console.log(emailvalidation("^akib@9pm.com"));

//Task 4
console.log("-----JS EX 4-----");
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

function gitStatus(index)
{
    var status=library[index].readingStatus; //var book=library[index] return book.readingStatus;
    return status;
    
}

console.log(gitStatus(2));
console.log(gitStatus(0));
console.log(gitStatus(1));

//Task 5
console.log("-----JS EX 5-----");
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
//ADD ITEM
function addItem(item)
{
    cart.push(item);
    //console.log(cart);
}
var newItem={name:"Socks", 
             price: 777, 
             quantity:2};
addItem(newItem);

//SORT ITEM ASCENDINGLY ACCORDING TO PRICE
function compare(a,b) {
  if (a.price < b.price)
    return -1;
  if (a.price > b.price)
    return 1;
  return 0;
}
cart.sort(compare);

//FIND NAME
function findByName(nam)
{
    var mat=[];
    var found=false;
    for (var i =0;i<cart.length;i++) {
        if(cart[i].name===nam)
        {
            mat.push(cart[i]);
            found=true;
        }
        
    }
    if(found==true){return mat;}
    else{console.log("NOPE NOT FOUND SAD LIFE");}
}
console.log(findByName('Socks'));
//console.log(cart);

//RETURN TOTAL COST
function sum()
{
    var temp=0;
    for(var i=0;i<cart.length;i++)
    {
        temp=temp+ cart[i].price;
    }
    return temp;
}
console.log("Total cost: "+ sum() +'$');

