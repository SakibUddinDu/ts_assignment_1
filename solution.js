function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        return !value;
    }
    else {
        return "Please provide a value which is a number, string or number";
    }
}
// console.log(formatValue('helloooo0'));
// console.log(formatValue(50));
// console.log(formatValue(false));
function getLength(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
}
// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
function filterByRating(booksArr) {
    return booksArr.filter(function (book) { return book.rating >= 4; });
}
function filterActiveUsers(users) {
    return users.filter(function (user) { return user.isActive; });
}
function printBookDetails(book) {
    var title = book.title, author = book.author, publishedYear = book.publishedYear, isAvailable = book.isAvailable;
    return "Title: ".concat(title, ", Author: ").concat(author, ", Published: ").concat(publishedYear, ", Available: ").concat(isAvailable === true ? "Yes" : "No");
}
// const myBook: Book1 = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
//   isAvailable: false,
// };
// console.log(printBookDetails(myBook))
function getUniqueValues(arr1, arr2) {
    var result = [];
    // Helper function to manually check existence
    function exists(value, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                return true;
            }
        }
        return false;
    }
    // Add unique values from arr1
    for (var i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i], result)) {
            result[result.length] = arr1[i];
        }
    }
    // Add unique values from arr2
    for (var i = 0; i < arr2.length; i++) {
        if (!exists(arr2[i], result)) {
            result[result.length] = arr2[i];
        }
    }
    return result;
}
