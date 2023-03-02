const cssbank = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Cascading Style Scripts",
      "Cascading System Sheets",
    ],
    answer: "Cascading Style Sheets",
    info: "CSS stands for Cascading Style Sheets, which is a language used for describing the presentation of web pages, including colors, layout, and fonts.",
  },
  {
    question: "What is the box model in CSS?",
    options: [
      "A way to create 3D effects",
      "A way to control layout",
      "A way to animate elements",
    ],
    answer: "A way to control layout",
    info: "The box model in CSS is a way to control the layout of elements on a web page. It consists of content, padding, borders, and margins, which can be manipulated to create different layouts and styles.",
  },
  {
    question: "What is the difference between class and ID selectors in CSS?",
    options: [
      "Class selectors are used to style multiple elements, while ID selectors are used to style a single element.",
      "Class selectors are used to style a single element, while ID selectors are used to style multiple elements.",
      "Class selectors and ID selectors are interchangeable.",
    ],
    answer:
      "Class selectors are used to style multiple elements, while ID selectors are used to style a single element.",
    info: "Class selectors and ID selectors are both used to apply styles to specific elements in a web page. The main difference is that class selectors can be used to apply the same style to multiple elements, while ID selectors should only be used for unique elements that require a specific style.",
  },
  {
    question: "What is the float property in CSS used for?",
    options: [
      "To create text that wraps around an image",
      "To animate elements on a web page",
      "To control the position of elements on a web page",
    ],
    answer: "To create text that wraps around an image",
    info: "The float property in CSS is used to create text that wraps around an image or other element on a web page. It can be used to create interesting layouts and styles, but should be used with caution as it can cause layout issues if not used correctly.",
  },
  {
    question: "What is the difference between margin and padding in CSS?",
    options: [
      "Margin is the space outside an element, while padding is the space inside an element.",
      "Padding is the space outside an element, while margin is the space inside an element.",
      "Margin and padding are the same thing.",
    ],
    answer:
      "Margin is the space outside an element, while padding is the space inside an element.",
    info: "Margin and padding are both used to create space around an element on a web page. The main difference is that margin creates space outside the element, while padding creates space inside the element.",
  },
  {
    question:
      "What is the difference between the display property values of block and inline?",
    options: [
      "Block elements take up the full width of their container and stack vertically, while inline elements flow horizontally and only take up as much space as necessary.",
      "Block elements flow horizontally and only take up as much space as necessary, while inline elements take up the full width of their container and stack vertically.",
      "Block and inline elements are the same thing.",
    ],
    answer:
      "Block elements take up the full width of their container and stack vertically, while inline elements flow horizontally and only take up as much space as necessary.",
    info: "The display property in CSS determines how an element is displayed on a web page. The block value creates a rectangular box that takes up the full width of its container and stacks vertically, while the inline value allows elements to flow horizontally and only take up as much space as necessary.",
  },
  {
    question: "What is the box-sizing property in CSS used for?",
    options: [
      "To control the layout of elements on a web page",
      "To create rounded corners on elements",
      "To specify the width and height of an element",
    ],
    answer: "To specify the width and height of an element",
    info: "The box-sizing property in CSS controls how the width and height of an element are calculated, including padding and borders. By default, the content-box value calculates the width and height based on the content only, while the border-box value includes padding and borders in the calculation.",
  },
  {
    question:
      "What is the difference between the position property values of relative and absolute?",
    options: [
      "Relative positioning moves an element relative to its current position, while absolute positioning moves an element relative to its closest positioned ancestor.",
      "Relative positioning moves an element relative to its closest positioned ancestor, while absolute positioning moves an element relative to its current position.",
      "Relative and absolute positioning are the same thing.",
    ],
    answer:
      "Relative positioning moves an element relative to its current position, while absolute positioning moves an element relative to its closest positioned ancestor.",
    info: "The position property in CSS determines how an element is positioned on a web page. Relative positioning moves an element relative to its current position, while absolute positioning moves an element relative to its closest positioned ancestor.",
  },
  {
    question:
      "What is the difference between the visibility property values of visible and hidden?",
    options: [
      "Visible displays an element on a web page, while hidden hides an element from view.",
      "Visible hides an element from view, while hidden displays an element on a web page.",
      "Visibility has no effect on how elements are displayed.",
    ],
    answer:
      "Visible displays an element on a web page, while hidden hides an element from view.",
    info: "The visibility property in CSS determines whether an element is visible or hidden on a web page. The visible value displays an element, while the hidden value hides an element from view without affecting the layout of the page.",
  },
  {
    question:
      "What is the difference between the :before and :after pseudo-elements in CSS?",
    options: [
      ":before creates content that appears before an element, while :after creates content that appears after an element.",
      ":before creates content that appears after an element, while :after creates content that appears before an element.",
      ":before and :after are the same thing.",
    ],
    answer:
      ":before creates content that appears before an element, while :after creates content that appears after an element.",
    info: "The :before and :after pseudo-elements in CSS allow content to be added to an element before or after its content. The :before pseudo-element creates content that appears before an element, while the :after pseudo-element creates content that appears after an element.",
  },
  {
    question:
      "What is the difference between the transform and transition properties in CSS?",
    options: [
      "Transform changes the shape or position of an element, while transition animates the change of a property over time.",
      "Transition changes the shape or position of an element, while transform animates the change of a property over time.",
      "Transform and transition are the same thing.",
    ],
    answer:
      "Transform changes the shape or position of an element, while transition animates the change of a property over time.",
    info: "The transform property in CSS allows elements to be transformed in various ways, such as rotating or scaling. The transition property allows for a property to be animated over time, such as changing the color of an element when the user hovers over it.",
  },
  {
    question:
      "What is the difference between the position property values of static and relative?",
    options: [
      "Static positioning is the default positioning of elements, while relative positioning moves an element relative to its current position.",
      "Static positioning moves an element relative to its current position, while relative positioning is the default positioning of elements.",
      "Static and relative positioning are the same thing.",
    ],
    answer:
      "Static positioning is the default positioning of elements, while relative positioning moves an element relative to its current position.",
    info: "The position property in CSS determines how an element is positioned on a web page. Static positioning is the default positioning of elements, while relative positioning moves an element relative to its current position.",
  },
  {
    question:
      "What is the difference between the display property values of none and visibility: hidden?",
    options: [
      "None removes an element from the flow of the page, while visibility: hidden hides an element but keeps its space.",
      "Visibility: hidden removes an element from the flow of the page, while none hides an element but keeps its space.",
      "None and visibility: hidden are the same thing.",
    ],
    answer:
      "None removes an element from the flow of the page, while visibility: hidden hides an element but keeps its space.",
    info: "The display property in CSS determines how an element is displayed on a web page. The value of none removes an element from the flow of the page, while visibility: hidden hides an element but keeps its space.",
  },
  {
    question:
      "What is the difference between the CSS properties display: inline-block and display: block?",
    options: [
      "display: inline-block is a mix between display: inline and display: block. It allows for an element to be treated as a block-level element, but it also allows for other elements to be displayed next to it on the same line. display: block creates a block-level element that takes up the full width of its parent container.",
      "display: inline-block creates a block-level element that takes up the full width of its parent container. display: block is a mix between display: inline and display: block. It allows for an element to be treated as a block-level element, but it also allows for other elements to be displayed next to it on the same line.",
      "display: inline-block and display: block are the same thing.",
    ],
    answer:
      "display: inline-block is a mix between display: inline and display: block. It allows for an element to be treated as a block-level element, but it also allows for other elements to be displayed next to it on the same line. display: block creates a block-level element that takes up the full width of its parent container.",
    info: "The display property in CSS determines how an element is displayed on a web page. display: inline-block creates a block-level element that allows for other elements to be displayed next to it on the same line, while display: block creates a block-level element that takes up the full width of its parent container.",
  },
  {
    question:
      "What is the difference between the CSS properties margin and padding?",
    options: [
      "Margin creates space outside of an element's border, while padding creates space inside of an element's border.",
      "Padding creates space outside of an element's border, while margin creates space inside of an element's border.",
      "Margin and padding are the same thing.",
    ],
    answer:
      "Margin creates space outside of an element's border, while padding creates space inside of an element's border.",
    info: "The CSS properties margin and padding are used to create space around and inside of an element. Margin creates space outside of an element's border, while padding creates space inside of an element's border.",
  },
  {
    question: "What is the CSS property z-index used for?",
    options: [
      "z-index is used to control the stacking order of elements on a web page. Elements with a higher z-index value will appear on top of elements with a lower z-index value.",
      "z-index is used to control the font size of text on a web page. Elements with a higher z-index value will have larger text than elements with a lower z-index value.",
      "z-index is used to control the position of elements on a web page. Elements with a higher z-index value will be positioned higher on the page than elements with a lower z-index value.",
    ],
    answer:
      "z-index is used to control the stacking order of elements on a web page. Elements with a higher z-index value will appear on top of elements with a lower z-index value.",
    info: "The CSS property z-index is used to control the stacking order of elements on a web page. Elements with a higher z-index value will appear on top of elements with a lower z-index value.",
  },
  {
    question:
      "What is the difference between the CSS properties opacity and visibility?",
    options: [
      "opacity controls the transparency of an element, while visibility controls whether an element is visible or hidden.",
      "visibility controls the transparency of an element, while opacity controls whether an element is visible or hidden.",
      "opacity and visibility are the same thing.",
    ],
    answer:
      "opacity controls the transparency of an element, while visibility controls whether an element is visible or hidden.",
    info: "The CSS properties opacity and visibility are used to control the visibility of an element, but in different ways. Opacity controls the transparency of an element, while visibility controls whether an element is visible or hidden.",
  },
  {
    question: "What is the CSS property position used for?",
    options: [
      "position is used to control the position of an element on a web page. It can be set to static, relative, absolute, or fixed.",
      "position is used to control the font size of text on a web page. It can be set to small, medium, or large.",
      "position is used to control the visibility of an element on a web page. It can be set to visible, hidden, or collapse.",
    ],
    answer:
      "position is used to control the position of an element on a web page. It can be set to static, relative, absolute, or fixed.",
    info: "The CSS property position is used to control the position of an element on a web page. It can be set to static (default), relative, absolute, or fixed. Each value has different positioning behaviors.",
  },
  {
    question:
      "What is the difference between the CSS properties width: 100% and max-width: 100%?",
    options: [
      "width: 100% will always make an element the full width of its parent container, while max-width: 100% will only make an element as wide as its parent container up to a maximum width of 100% of the viewport width.",
      "max-width: 100% will always make an element the full width of its parent container, while width: 100% will only make an element as wide as its parent container up to a maximum width of 100% of the viewport width.",
      "width: 100% and max-width: 100% are the same thing.",
    ],
    answer:
      "width: 100% will always make an element the full width of its parent container, while max-width: 100% will only make an element as wide as its parent container up to a maximum width of 100% of the viewport width.",
    info: "The CSS properties width and max-width are used to control the width of an element. width: 100% will always make an element the full width of its parent container, while max-width: 100% will only make an element as wide as its parent container up to a maximum width of 100% of the viewport width.",
  },
  {
    question:
      "What is the difference between the CSS properties display: none and visibility: hidden?",
    options: [
      "display: none removes an element from the document flow entirely, while visibility: hidden hides the element but it still takes up space.",
      "visibility: hidden removes an element from the document flow entirely, while display: none hides the element but it still takes up space.",
      "display: none and visibility: hidden are the same thing.",
    ],
    answer:
      "display: none removes an element from the document flow entirely, while visibility: hidden hides the element but it still takes up space.",
    info: "The CSS properties display and visibility are used to control the visibility of an element, but in different ways. display: none removes an element from the document flow entirely, while visibility: hidden hides the element but it still takes up space.",
  },
  {
    question:
      "What is the difference between the CSS properties padding and margin?",
    options: [
      "padding is the space between the content and the border of an element, while margin is the space between the border and the surrounding elements.",
      "margin is the space between the content and the border of an element, while padding is the space between the border and the surrounding elements.",
      "padding and margin are the same thing.",
    ],
    answer:
      "padding is the space between the content and the border of an element, while margin is the space between the border and the surrounding elements.",
    info: "The CSS properties padding and margin are used to control the space around an element, but in different ways. padding is the space between the content and the border of an element, while margin is the space between the border and the surrounding elements.",
  },
  {
    question: "What is the CSS property box-sizing used for?",
    options: [
      "box-sizing is used to control how an element's width and height are calculated. The default value is content-box, which includes only the element's content in its width and height. The value border-box includes the element's content, padding, and border in its width and height.",
      "box-sizing is used to control how an element's padding and margin are calculated. The default value is content-box, which includes only the element's content in its padding and margin. The value border-box includes the element's content, padding, and border in its padding and margin.",
      "box-sizing is used to control how an element's position is calculated. The default value is static, which means the element is positioned according to the normal document flow. The value absolute positions the element relative to its nearest positioned ancestor.",
    ],
    answer:
      "box-sizing is used to control how an element's width and height are calculated. The default value is content-box, which includes only the element's content in its width and height. The value border-box includes the element's content, padding, and border in its width and height.",
    info: "The CSS property box-sizing is used to control how an element's width and height are calculated. The default value is content-box, which includes only the element's content in its width and height. The value border-box includes the element's content, padding, and border in its width and height.",
  },
  {
    question:
      "What is the difference between the CSS properties display: none and visibility: hidden?",
    options: [
      "display: none removes an element from the document flow entirely, while visibility: hidden hides the element but it still takes up space.",
      "visibility: hidden removes an element from the document flow entirely, while display: none hides the element but it still takes up space.",
      "display: none and visibility: hidden are the same thing.",
    ],
    answer:
      "display: none removes an element from the document flow entirely, while visibility: hidden hides the element but it still takes up space.",
    info: "The CSS properties display and visibility are used to control the visibility of an element, but in different ways. display: none removes an element from the document flow entirely, while visibility: hidden hides the element but it still takes up space.",
  },
  {
    question:
      "What is the difference between the CSS properties padding and margin?",
    options: [
      "padding is the space between the content and the border of an element, while margin is the space between the border and the surrounding elements.",
      "margin is the space between the content and the border of an element, while padding is the space between the border and the surrounding elements.",
      "padding and margin are the same thing.",
    ],
    answer:
      "padding is the space between the content and the border of an element, while margin is the space between the border and the surrounding elements.",
    info: "The CSS properties padding and margin are used to control the space around an element, but in different ways. padding is the space between the content and the border of an element, while margin is the space between the border and the surrounding elements.",
  },
  {
    question: "What is the CSS property box-sizing used for?",
    options: [
      "box-sizing is used to control how an element's width and height are calculated. The default value is content-box, which includes only the element's content in its width and height. The value border-box includes the element's content, padding, and border in its width and height.",
      "box-sizing is used to control how an element's padding and margin are calculated. The default value is content-box, which includes only the element's content in its padding and margin. The value border-box includes the element's content, padding, and border in its padding and margin.",
      "box-sizing is used to control how an element's position is calculated. The default value is static, which means the element is positioned according to the normal document flow. The value absolute positions the element relative to its nearest positioned ancestor.",
    ],
    answer:
      "box-sizing is used to control how an element's width and height are calculated. The default value is content-box, which includes only the element's content in its width and height. The value border-box includes the element's content, padding, and border in its width and height.",
    info: "The CSS property box-sizing is used to control how an element's width and height are calculated. The default value is content-box, which includes only the element's content in its width and height. The value border-box includes the element's content, padding, and border in its width and height.",
  },
];

export default cssbank;
