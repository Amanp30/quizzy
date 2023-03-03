const pythonbank = [
  {
    question: "What is Python?",
    options: [
      "A high-level programming language",
      "A low-level programming language",
      "A markup language",
    ],
    answer: "A high-level programming language",
    info: "Python is an interpreted, high-level, general-purpose programming language that emphasizes code readability and ease of use.",
  },
  {
    question: "What is PEP 8?",
    options: [
      "A tool for generating Python documentation",
      "A style guide for Python code",
      "A package for Python virtual environments",
    ],
    answer: "A style guide for Python code",
    info: "PEP 8 is a document that provides guidelines and best practices for writing Python code that is easy to read and maintain.",
  },
  {
    question: "What is a Python module?",
    options: [
      "A file containing Python code",
      "A package containing multiple Python modules",
      "A built-in function in Python",
    ],
    answer: "A file containing Python code",
    info: "In Python, a module is a file containing Python code that can be imported and used in other Python programs.",
  },
  {
    question: "What is the difference between a list and a tuple in Python?",
    options: [
      "Lists are mutable and tuples are immutable",
      "Tuples are mutable and lists are immutable",
      "Lists and tuples are both mutable",
    ],
    answer: "Lists are mutable and tuples are immutable",
    info: "In Python, a list is a mutable sequence of elements, while a tuple is an immutable sequence of elements.",
  },
  {
    question:
      "What is the difference between '==' and 'is' operators in Python?",
    options: [
      "'==' checks for equality of values, while 'is' checks for object identity",
      "'is' checks for equality of values, while '==' checks for object identity",
      "Both '==' and 'is' check for equality of values",
    ],
    answer:
      "'==' checks for equality of values, while 'is' checks for object identity",
    info: "In Python, the '==' operator checks for equality of values, while the 'is' operator checks for object identity.",
  },
  {
    question: "What is the difference between a tuple and a list in Python?",
    options: [
      "Tuples are immutable, whereas lists are mutable",
      "Lists are immutable, whereas tuples are mutable",
      "Both lists and tuples are immutable",
    ],
    answer: "Tuples are immutable, whereas lists are mutable",
    info: "In Python, a tuple is an ordered collection of elements, similar to a list. However, tuples are immutable, which means that their elements cannot be changed once they are created. Lists, on the other hand, are mutable and can be modified after they are created.",
  },
  {
    question: "What is the purpose of the 'finally' keyword in Python?",
    options: [
      "To define a new class variable",
      "To catch and handle exceptions",
      "To define code that will always be executed, regardless of whether an exception is raised",
    ],
    answer:
      "To define code that will always be executed, regardless of whether an exception is raised",
    info: "In Python, the 'finally' keyword is used to define code that will always be executed, regardless of whether an exception is raised in the try block or not. This can be useful for cleaning up resources or closing files, for example.",
  },
  {
    question: "What is the purpose of the 'super' keyword in Python?",
    options: [
      "To call a method in the superclass of a class",
      "To create a new instance of a class",
      "To define a new class variable",
    ],
    answer: "To call a method in the superclass of a class",
    info: "In Python, the 'super' keyword is used to call a method in the superclass of a class. This can be useful when you want to override a method in a subclass but still want to call the original method from the superclass.",
  },
  {
    question:
      "What is the purpose of the 'try' and 'except' keywords in Python?",
    options: [
      "To define a loop",
      "To catch and handle exceptions",
      "To define a conditional statement",
    ],
    answer: "To catch and handle exceptions",
    info: "In Python, the 'try' and 'except' keywords are used to catch and handle exceptions. This can be useful when you want to handle errors gracefully, rather than crashing the program.",
  },
  {
    question: "What is the purpose of the 'range' function in Python?",
    options: [
      "To create a range of numbers",
      "To create a list of numbers",
      "To create a dictionary of numbers",
    ],
    answer: "To create a range of numbers",
    info: "In Python, the 'range' function is used to create a range of numbers. This can be useful for creating loops that iterate over a sequence of numbers.",
  },
  {
    question: "What is a decorator in Python?",
    options: [
      "A function that takes another function as input and returns a modified version of it",
      "A type of Python module",
      "A built-in Python keyword",
    ],
    answer:
      "A function that takes another function as input and returns a modified version of it",
    info: "In Python, a decorator is a function that takes another function as input and returns a modified version of it. Decorators can be used to modify the behavior of a function without changing its source code.",
  },
  {
    question: "What is the purpose of the 'self' parameter in Python classes?",
    options: [
      "To refer to the current instance of the class",
      "To define a new class variable",
      "To access class methods from within an instance method",
    ],
    answer: "To refer to the current instance of the class",
    info: "In Python, the 'self' parameter is used to refer to the current instance of the class. It is typically the first parameter of instance methods.",
  },
  {
    question: "What is a generator in Python?",
    options: [
      "A function that returns an iterator",
      "A type of Python module",
      "A built-in Python keyword",
    ],
    answer: "A function that returns an iterator",
    info: "In Python, a generator is a special type of function that returns an iterator. It generates a sequence of values on the fly as they are needed, rather than generating all of them at once.",
  },
  {
    question: "What is the purpose of the 'pass' keyword in Python?",
    options: [
      "To do nothing",
      "To indicate the end of a loop or conditional block",
      "To raise an exception",
    ],
    answer: "To do nothing",
    info: "In Python, the 'pass' keyword is used to indicate that nothing should happen in a certain block of code. It is often used as a placeholder when writing code that will be filled in later.",
  },
  {
    question: "What is a dictionary in Python?",
    options: [
      "An unordered collection of key-value pairs",
      "A built-in Python data type for storing integers",
      "A type of Python module",
    ],
    answer: "An unordered collection of key-value pairs",
    info: "In Python, a dictionary is an unordered collection of key-value pairs. Each key is associated with a value, and the keys must be unique within a dictionary.",
  },
];

export default pythonbank;
