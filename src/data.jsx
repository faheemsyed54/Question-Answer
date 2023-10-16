const data=[{
    question:'What is React?',
    answer:' React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the user interface when the underlying data changes. React is maintained by Facebook and a community of developers.'
    
},
{
    question:'What is JSX in React?',
    answer:'JSX (JavaScript XML) is a syntax extension for JavaScript used in React to define the structure of UI components. It allows you to write HTML-like code within JavaScript, making it easier to describe the UI in a component.'
},
{
    question:'What is a React component?',
    answer:'A React component is a reusable, self-contained unit that represents a part of a user interface. Components can be composed together to build complex UIs. Components can be either functional (stateless) or class-based (stateful).'
},
{
    question:'What is the difference between props and state in React?',
    answer:' Props (short for properties) and state are both used to manage data in React. The key difference is that props are passed into a component from its parent, and they are read-only within that component. State, on the other hand, is managed within the component and can be changed, triggering re-renders.'
},{
    question:'What is the purpose of the virtual DOM in React?',
    answer:'The virtual DOM is an abstraction of the actual DOM in the browser. React uses it to efficiently update the UI. When data changes, React first updates the virtual DOM, then calculates the difference (diffing) between the virtual and real DOMs, and finally applies the minimal set of changes to the real DOM. This process makes UI updates faster and more efficient.'
}
,{
    question:'What is React Router?',
    answer:'React Router is a popular routing library for React applications. It allows you to handle navigation and routing in a single-page application (SPA). You can define routes, map them to components, and handle navigation events.'
}
,{
    question:'What is React Router?',
    answer:'React Router is a popular routing library for React applications. It allows you to handle navigation and routing in a single-page application (SPA). You can define routes, map them to components, and handle navigation events.'
},{
    question:'What is React Router?',
    answer:'React Router is a popular routing library for React applications. It allows you to handle navigation and routing in a single-page application (SPA). You can define routes, map them to components, and handle navigation events.'
}]

export default data