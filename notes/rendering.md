# Rendering in React

Rendering is the process of updating the page that the client sees based on internal state changes to the application, under the hood it works as follows:

1. Trigger: A component state changes, or a component recieves new props from it's parent, or a parent component re-renders.
2. Re-rendering virtual DOM: function components are run to update the React virtual DOM (a lightweight in-memory representation of the real DOM)
3. Reconcliation or Diffing: React compares the virtaul DOM to the previous DOM to find differences (reconciliation), this is done very efficiently and react calculates how to quickly update the real DOM
4. React updates the real DOM with the calculated changes.

(Optional) Batching and priority can be used to prioritise certain UI, or group together changes. React hooks such as `useEffect` may run after rendering. There are also various methods to prevent re-rendering for certain child components, which will save time.

Possible Triggers:
1. State Changes
2. Prop Changes
3. Parent component re-renders
4. Force Update
5. External State Libraries (e.g Redux)
6. Other Hooks
7. React Contexts

This is the main selling point of react, it makes web apps much quicker and more responsive due to far more efficient and scalable DOM updating. 

"UI is a function of state in React."
