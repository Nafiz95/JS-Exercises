/* JavaScript code here */
//Task 1
console.log("External JS");

//Task 2
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
function emailvalidation(address)
{

    var check=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = check.test(address);
    return match;
}
console.log(emailvalidation("^akib@9pm.com"));

//Task 4
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