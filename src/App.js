import './App.css';

import Card from "./Card";

function App() {
  const books = [
    { 
      src: "https://m.media-amazon.com/images/I/41QiRwidJJL.jpg", 
      title: "Introductory Nuclear Physics Updated: Kenneth S Krane Kindle Edition", 
      description: "Introductory Nuclear Physics acts as a comprehensive guide to all matters related to the introduction and fundamentals of nuclear physics. The complex subject matter is handled with the suitable tone needed to guide beginners into the fundamentals of the topic." 
    },
    { 
      src: "https://images-na.ssl-images-amazon.com/images/I/41vNUw5VbPL._SX398_BO1,204,203,200_.jpg", 
      title: "Modern Physics 4th Edition", 
      description: "One of the field's most respected introductory texts, Modern Physics provides a deep exploration of fundamental theory and experimentation." 
    },
    { 
      src: "https://images-na.ssl-images-amazon.com/images/I/513ShlaCsTL._SX384_BO1,204,203,200_.jpg", 
      title: "Essentials of Computer Architecture 2nd Edition", 
      description: "This easy to read textbook provides an introduction to computer architecture, while focusing on the essential aspects of hardware that programmers need to know." 
    },
    { 
      src: "https://m.media-amazon.com/images/I/410f-bUBR3L._SY346_.jpg", 
      title: "You Don't Know JS Yet: Get Started", 
      description: "Get Started prepares you for the journey ahead, first surveying the language then detailing how the rest of the You Don't Know JS Yet book series guides you to knowing JS more deeply." 
    },
    { 
      src: "https://images-na.ssl-images-amazon.com/images/I/41m1UbR71+L._SX331_BO1,204,203,200_.jpg", 
      title: "C# 8.0 in a Nutshell: The Definitive Reference 1st Edition", 
      description: "When you have questions about C# 8.0 or .NET Core, this best-selling guide has the answers you need. C# is a language of unusual flexibility and breadth, but with its continual growth there’s so much more to learn. In the tradition of the O’Reilly Nutshell guides, this thoroughly updated edition is simply the best one-volume reference to the C# language available today." 
    },
    { 
      src: "https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX342_SY445_QL70_FMwebp_.jpg", 
      title: "Learning React: Modern Patterns for Developing React Apps 2nd Edition", 
      description: "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary." 
    },
    { 
      src: "https://images-na.ssl-images-amazon.com/images/I/51sispcUPXL._SX342_SY445_QL70_FMwebp_.jpg", 
      title: "Full Stack Serverless: Modern Application Development with React, AWS, and GraphQL 1st Edition", 
      description: "Cloud computing is typically associated with backend development and DevOps. But with the rise of serverless technologies and a new generation of services and frameworks, frontend and mobile developers can build robust applications with production-ready features such as authentication and authorization, API gateways, chatbots, augmented reality scenes, and more. This hands-on guide shows you how." 
    }
  ]

  const jsxBooks = books.map( (book, index) => <Card key={index} data={ book } />)
  return (
    <div className="App">
      { jsxBooks }
    </div>
  );
}

export default App;
