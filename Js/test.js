var funcs = []; 

for (let i = 0; i < 5; i++) 
{
	funcs[i] = function(i) {
		return i; 
	};
}  

console.log(funcs[0]());
console.log(funcs[1]());

