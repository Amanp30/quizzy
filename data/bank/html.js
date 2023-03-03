const htmlbank = [
  {
    question: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
    options: [
      "To define the character encoding of the document",
      "To specify the version of HTML that the document is written in",
      "To provide instructions to the web browser about how to render the page",
    ],
    answer: "To specify the version of HTML that the document is written in",
    info: "The 'DOCTYPE' declaration is an instruction to the web browser about what version of HTML the page is written in. It is used to ensure that the browser displays the page correctly, and can also affect the behavior of certain elements or features of the page.",
  },
  {
    question:
      "What is the difference between the 'id' and 'class' attributes in HTML?",
    options: [
      "The 'id' attribute is used to group multiple elements together, whereas the 'class' attribute is used to uniquely identify a single element",
      "The 'id' attribute is used to uniquely identify a single element, whereas the 'class' attribute is used to group multiple elements together",
      "The 'id' and 'class' attributes are interchangeable and can be used for the same purpose",
    ],
    answer:
      "The 'id' attribute is used to uniquely identify a single element, whereas the 'class' attribute is used to group multiple elements together",
    info: "In HTML, the 'id' attribute is used to provide a unique identifier for an element on the page. This can be useful for styling the element with CSS or for targeting it with JavaScript. The 'class' attribute, on the other hand, is used to group multiple elements together and apply the same styles to them. This can be useful for applying consistent styles to multiple elements on a page, such as a group of buttons or links.",
  },
  {
    question: "What is the purpose of the 'alt' attribute in the 'img' tag?",
    options: [
      "It provides alternative text for the image, which can be displayed in place of the image if it cannot be loaded or if the user is using a screen reader",
      "It specifies the URL of the image that should be displayed",
      "It sets the width and height of the image",
    ],
    answer:
      "It provides alternative text for the image, which can be displayed in place of the image if it cannot be loaded or if the user is using a screen reader",
    info: "The 'alt' attribute is used to provide alternative text for an image in the 'img' tag. This can be useful for accessibility purposes, such as when the image cannot be loaded or if the user is using a screen reader. The alternative text should describe the content or function of the image, such as 'a red apple' or 'a submit button'.",
  },
  {
    question: "What is the purpose of the 'form' element in HTML?",
    options: [
      "To display text content on the page",
      "To create a form for users to input data",
      "To link to external pages or resources",
    ],
    answer: "To create a form for users to input data",
    info: "The 'form' element is used to create a form on a web page, which allows users to input data or information. This can be useful for collecting user information, such as names, email addresses, or feedback.",
  },
  {
    question: "What is the purpose of the 'meta' element in HTML?",
    options: [
      "To specify the title of the web page",
      "To provide additional information about the web page, such as keywords or descriptions",
      "To create links to external pages or resources",
    ],
    answer:
      "To provide additional information about the web page, such as keywords or descriptions",
    info: "The 'meta' element is used to provide additional information about a web page, such as keywords or descriptions that can help search engines or social media platforms better understand the content of the page. This information is typically not visible to users on the page itself.",
  },
  {
    question: "What is the purpose of the 'ul' element in HTML?",
    options: [
      "To display text content on the page",
      "To create a list of items without any specific order",
      "To create a list of items in a specific order",
    ],
    answer: "To create a list of items without any specific order",
    info: "The 'ul' element is used to create an unordered list on a web page, which lists items in no particular order. This can be useful for displaying a list of bullet points or other items that do not have a specific sequence.",
  },
  {
    question: "What is the purpose of the 'table' element in HTML?",
    options: [
      "To create a layout of text and images on the page",
      "To create a list of items without any specific order",
      "To display data in a tabular format",
    ],
    answer: "To display data in a tabular format",
    info: "The 'table' element is used to create a table on a web page, which can be used to display data in a tabular format. Tables typically consist of rows and columns, and can include headers, footers, and other formatting options.",
  },
  {
    question: "What is the purpose of the 'img' element in HTML?",
    options: [
      "To display text content on the page",
      "To create a link to an external resource",
      "To display an image on the page",
    ],
    answer: "To display an image on the page",
    info: "The 'img' element is used to display an image on a web page. The 'src' attribute of the 'img' element specifies the URL of the image file, and other attributes can be used to control the size, alignment, and other properties of the image.",
  },
  {
    question: "What is the purpose of the 'div' element in HTML?",
    options: [
      "To create a hyperlink to another web page",
      "To create a block-level container for other HTML elements",
      "To create an inline container for other HTML elements",
    ],
    answer: "To create a block-level container for other HTML elements",
    info: "The 'div' element is used to create a block-level container on a web page, which can be used to group other HTML elements together for styling or layout purposes. The 'div' element has no semantic meaning on its own and is typically used as a generic container.",
  },
  {
    question: "What is the purpose of the 'a' element in HTML?",
    options: [
      "To create a hyperlink to another web page or resource",
      "To display an image on the page",
      "To create a list of items in a specific order",
    ],
    answer: "To create a hyperlink to another web page or resource",
    info: "The 'a' element is used to create a hyperlink on a web page, which allows users to navigate to another web page or resource by clicking on the link. The 'href' attribute of the 'a' element specifies the URL of the destination, and other attributes can be used to control the appearance or behavior of the link.",
  },
  {
    question: "What is the purpose of the 'form' attribute 'method' in HTML?",
    options: [
      "To specify the HTTP verb used to submit the form data",
      "To specify the URL of the destination for the form data",
      "To specify the encoding type used for the form data",
    ],
    answer: "To specify the HTTP verb used to submit the form data",
    info: "The 'method' attribute of the 'form' element is used to specify the HTTP verb used to submit the form data. The two most common methods are 'GET' and 'POST', which are used to retrieve or submit data to the server, respectively. The 'method' attribute is typically set to 'POST' when the form contains sensitive data, such as passwords or credit card information.",
  },
  {
    question: "What is the purpose of the 'head' element in HTML?",
    options: [
      "To define the main content of the web page",
      "To specify the layout of the web page",
      "To provide metadata about the web page",
    ],
    answer: "To provide metadata about the web page",
    info: "The 'head' element is used to provide metadata about the web page, such as the title, author, and description. This information is used by search engines and other tools to index and display the web page correctly.",
  },
  {
    question: "What is the purpose of the 'table' element in HTML?",
    options: [
      "To display a list of items in a specific order",
      "To create a block-level container for other HTML elements",
      "To display tabular data in rows and columns",
    ],
    answer: "To display tabular data in rows and columns",
    info: "The 'table' element is used to display tabular data on a web page, such as a list of items with associated values. The 'tr' element is used to define each row of the table, and the 'td' element is used to define each cell within a row. Additional elements, such as 'th' and 'thead', can be used to define table headers and other features.",
  },
  {
    question: "What is the purpose of the 'select' element in HTML?",
    options: [
      "To display a list of items in a specific order",
      "To create a form input for selecting one or more options",
      "To create a hyperlink to another web page or resource",
    ],
    answer: "To create a form input for selecting one or more options",
    info: "The 'select' element is used to create a form input for selecting one or more options from a list. The 'option' element is used to define each option within the list, and the 'selected' attribute can be used to pre-select an option when the page is loaded.",
  },
  {
    question: "What is the purpose of the 'span' element in HTML?",
    options: [
      "To create a block-level container for other HTML elements",
      "To create an inline container for other HTML elements",
      "To create a hyperlink to another web page or resource",
    ],
    answer: "To create an inline container for other HTML elements",
    info: "The 'span' element is used to create an inline container on a web page, which can be used to group other HTML elements together for styling or layout purposes. The 'span' element has no semantic meaning on its own and is typically used as a generic container.",
  },
];

export default htmlbank;
