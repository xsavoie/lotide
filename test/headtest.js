const assertEqual = require("../assertEqual")
const head = require("../head")

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1,2,3,4,5]), 1);
assertEqual(head([1,2,3,4,5]), 2);
assertEqual(head([1]), 1);
assertEqual(head([]), 1);