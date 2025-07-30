
let year =prompt('In which year was miyen born?');
if (year == 2003) {
    alert("You are correct! Miyan was born in 2003.");

}else if (year < 2003) {
    alert("Miyan was born after " + year + ". Try again!");
}
else if (year > 2003) {
    alert("Miyan was born before " + year + ". Try again!");
}