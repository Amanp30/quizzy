const jsbank = [
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function that returns another function",
      "A way to create private variables",
      "A way to handle asynchronous code",
    ],
    answer: "A way to create private variables",
    info: "A closure is a function that has access to variables in its outer scope, even after the outer function has returned. This allows for the creation of private variables in JavaScript.",
  },
  {
    question: "What is the difference between var, let, and const?",
    options: [
      "var is function-scoped, while let and const are block-scoped",
      "var can be reassigned, while let can be reassigned but const cannot",
      "All three are function-scoped",
    ],
    answer: "var is function-scoped, while let and const are block-scoped",
    info: "var is function-scoped, meaning that it is accessible throughout the function it is declared in. let and const are block-scoped, meaning that they are only accessible within the block they are declared in (e.g. if statement or for loop). var can be reassigned and updated, while let can only be reassigned and const cannot be reassigned or updated.",
  },
  {
    question: "What is hoisting in JavaScript?",
    options: [
      "A way to create private variables",
      "A way to handle asynchronous code",
      "The process of moving variable and function declarations to the top of their respective scopes",
    ],
    answer:
      "The process of moving variable and function declarations to the top of their respective scopes",
    info: "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their respective scopes, regardless of where they are declared in the code. This means that you can use a variable or function before it is declared, but it will be undefined.",
  },
  {
    question: "What is event bubbling in JavaScript?",
    options: [
      "The process of capturing an event at the top level of the DOM and propagating it down to the target element",
      "The process of capturing an event at the target element and propagating it up to the top level of the DOM",
      "The process of capturing an event and preventing it from propagating to other elements",
    ],
    answer:
      "The process of capturing an event at the target element and propagating it up to the top level of the DOM",
    info: "Event bubbling is a JavaScript behavior where an event that is triggered on an element will also trigger on all of its ancestor elements, in order from the target element up to the top level of the DOM. This can be useful for handling events on parent elements without having to attach an event listener to each individual child element.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    options: [
      "== compares values and types, while === only compares values",
      "== only compares values, while === compares values and types",
      "There is no difference",
    ],
    answer: "== only compares values, while === compares values and types",
    info: "The == operator compares the values of two variables, but will perform type coercion if the types are different. The === operator compares both the values and types of the variables, without performing type coercion.",
  },
  {
    question:
      "What is the difference between null and undefined in JavaScript?",
    options: [
      "null represents a deliberate non-value, while undefined represents an unintentional absence of value",
      "null is a primitive value, while undefined is an object",
      "There is no difference",
    ],
    answer:
      "null represents a deliberate non-value, while undefined represents an unintentional absence of value",
    info: "null is used to represent a deliberate non-value, while undefined is used to represent an unintentional absence of value. In other words, null is something that is intentionally set to a non-value, while undefined is something that has not been set to a value.",
  },
  {
    question: "What is a promise in JavaScript?",
    options: [
      "A way to handle asynchronous code",
      "A way to create private variables",
      "A way to capture and propagate events",
    ],
    answer: "A way to handle asynchronous code",
    info: "A promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises can be used to simplify asynchronous code and avoid callback hell.",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous code?",
    options: [
      "Synchronous code blocks execution until a task is complete, while asynchronous code allows other tasks to continue while waiting for a task to complete",
      "Synchronous code runs on a single thread, while asynchronous code can run on multiple threads",
      "There is no difference",
    ],
    answer:
      "Synchronous code blocks execution until a task is complete, while asynchronous code allows other tasks to continue while waiting for a task to complete",
    info: "Synchronous code blocks execution until a task is complete, meaning that the code will wait for the task to complete before moving on to the next line of code. Asynchronous code, on the other hand, allows other tasks to continue while waiting for a task to complete, meaning that the code can continue executing while waiting for a response from a server or other long-running task.",
  },
  {
    question: "What is the difference between a shallow copy and a deep copy?",
    options: [
      "A shallow copy creates a new object that shares the same properties as the original object, while a deep copy creates a new object with all new properties",
      "A shallow copy creates a new object with all new properties, while a deep copy creates a new object that shares the same properties as the original object",
      "There is no difference",
    ],
    answer:
      "A shallow copy creates a new object that shares the same properties as the original object, while a deep copy creates a new object with all new properties",
    info: "When copying an object in JavaScript, a shallow copy creates a new object that shares the same properties as the original object, but any nested objects are still referenced from the original object. A deep copy, on the other hand, creates a completely new object with all new properties, including any nested objects.",
  },

  {
    question: "What is the difference between let and var in JavaScript?",
    options: [
      "Variables declared with var are function-scoped, while variables declared with let are block-scoped",
      "Variables declared with let are function-scoped, while variables declared with var are block-scoped",
      "There is no difference",
    ],
    answer:
      "Variables declared with var are function-scoped, while variables declared with let are block-scoped",
    info: "Variables declared with var are function-scoped, meaning they are accessible throughout the entire function in which they are declared. Variables declared with let, on the other hand, are block-scoped, meaning they are only accessible within the block in which they are declared (i.e. within curly braces {}).",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    options: [
      "== performs type coercion, while === does not",
      "=== performs type coercion, while == does not",
      "There is no difference",
    ],
    answer: "== performs type coercion, while === does not",
    info: "The == operator in JavaScript performs type coercion, meaning that it will try to convert the operands to the same type before comparing them. For example, 1 == '1' would be true because the string '1' is coerced to the number 1 before comparison. The === operator, on the other hand, does not perform type coercion and will only return true if the operands are of the same type and have the same value.",
  },
  {
    question:
      "What is the difference between a function declaration and a function expression in JavaScript?",
    options: [
      "A function declaration is hoisted to the top of its scope, while a function expression is not",
      "A function expression is hoisted to the top of its scope, while a function declaration is not",
      "There is no difference",
    ],
    answer:
      "A function declaration is hoisted to the top of its scope, while a function expression is not",
    info: "A function declaration in JavaScript is defined using the function keyword followed by a name and a set of parentheses and curly braces. Function declarations are hoisted to the top of their scope, meaning they can be called before they are defined in the code. A function expression, on the other hand, is defined by assigning a function to a variable or a property of an object. Function expressions are not hoisted and cannot be called before they are defined in the code.",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A closure is a function that has access to variables in its parent scope, even after the parent function has returned",
      "A closure is a way to group related functions and variables together",
      "A closure is a way to create private variables in JavaScript",
    ],
    answer:
      "A closure is a function that has access to variables in its parent scope, even after the parent function has returned",
    info: "In JavaScript, a closure is created when a function is defined inside another function and has access to variables in the parent function's scope, even after the parent function has returned. Closures are commonly used to create private variables and functions in JavaScript.",
  },
  {
    question: "What is event bubbling in JavaScript?",
    options: [
      "Event bubbling is the process by which an event is handled by the innermost element first, and then propagated to its ancestors",
      "Event bubbling is the process by which an event is handled by the outermost element first, and then propagated to its descendants",
      "There is no such thing as event bubbling",
    ],
    answer:
      "Event bubbling is the process by which an event is handled by the innermost element first, and then propagated to its ancestors",
    info: "In JavaScript, event bubbling is the process by which an event is handled by the innermost element first, and then propagated to its ancestors. For example, if a button element is clicked, the click event will first be handled by the button element, then by its parent element, and so on, until it reaches the top-level document object.",
  },
  {
    question: "What is the difference between call and apply in JavaScript?",
    options: [
      "call accepts arguments as individual values, while apply accepts arguments as an array",
      "apply accepts arguments as individual values, while call accepts arguments as an array",
      "There is no difference",
    ],
    answer:
      "call accepts arguments as individual values, while apply accepts arguments as an array",
    info: "The call and apply methods in JavaScript are used to call a function with a specific context (i.e. value of this) and a set of arguments. The main difference between them is the way they accept arguments: call accepts arguments as individual values, while apply accepts arguments as an array. For example, obj.method.call(context, arg1, arg2) is equivalent to obj.method.apply(context, [arg1, arg2]).",
  },
  {
    question: "What is the difference between let and const in JavaScript?",
    options: [
      "Variables declared with let can be reassigned, while variables declared with const cannot",
      "Variables declared with const can be reassigned, while variables declared with let cannot",
      "There is no difference",
    ],
    answer:
      "Variables declared with let can be reassigned, while variables declared with const cannot",
    info: "In JavaScript, let and const are used to declare block-scoped variables. The main difference between them is that variables declared with let can be reassigned to a new value, while variables declared with const cannot be reassigned. For example, let x = 1; x = 2; is valid code, while const y = 1; y = 2; will throw an error.",
  },
  {
    question:
      "What is the difference between async/await and promises in JavaScript?",
    options: [
      "Async/await is a way to write asynchronous code in a synchronous style, while promises are a way to handle asynchronous code using callbacks",
      "Promises are a way to write asynchronous code in a synchronous style, while async/await is a way to handle asynchronous code using callbacks",
      "There is no difference",
    ],
    answer:
      "Async/await is a way to write asynchronous code in a synchronous style, while promises are a way to handle asynchronous code using callbacks",
    info: "In JavaScript, async/await and promises are both used to handle asynchronous code, but they use different syntax and have different advantages. Async/await is a way to write asynchronous code in a synchronous style, using the await keyword to wait for a promise to resolve before continuing execution. Promises, on the other hand, are a way to handle asynchronous code using callbacks, chaining then() methods to handle the results of asynchronous operations.",
  },
  {
    question: "What is the event loop in JavaScript?",
    options: [
      "The event loop is a mechanism in JavaScript that allows asynchronous code to be executed non-blocking",
      "The event loop is a mechanism in JavaScript that allows synchronous code to be executed non-blocking",
      "There is no such thing as event loop in JavaScript",
    ],
    answer:
      "The event loop is a mechanism in JavaScript that allows asynchronous code to be executed non-blocking",
    info: "In JavaScript, the event loop is a mechanism that allows asynchronous code to be executed non-blocking. When a piece of asynchronous code is executed, it is placed in a queue, and the event loop continuously checks the queue for any items to be executed. When an item is found, it is taken out of the queue and executed, and the event loop then moves on to the next item in the queue. This allows other code to continue executing while the asynchronous code is waiting to be executed.",
  },
];

export default jsbank;
