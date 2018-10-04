/* JavaScript code here */
console.log("External JS");


function sumArray(x)
{
    var sum=0;
    x.forEach(function(value, index) {
	sum = sum + value;
    });
	return sum;
}
console.log(sumArray([1,2,3]));