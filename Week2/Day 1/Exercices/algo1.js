/*var start = tab[0];
var end = tab[tab.length-1];
console.log(tab);
console.log(start);
console.log(end);*/

function permutation(tab)
{
    var i = 0;
    while (i<(tab.length+1)/2){
        var permut = tab[i];
        tab[i] = tab[tab.length-(i+1)];
        tab[tab.length-(i+1)] = permut;
        i++;
        }
    return tab;
}

var tab = ["a","b","c","d","e","f"];
console.log("The new array is " + permutation(tab));
