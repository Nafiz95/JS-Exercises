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
console.log(emailvalidation("akib@9pm.com"));

