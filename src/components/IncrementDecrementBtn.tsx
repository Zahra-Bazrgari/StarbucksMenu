// import React from "react";

// const IncrementDecrementBtn = ({ quantity = 0, maxValue = 100 }) => {
//   const [count, setCount] = React.useState(quantity);

//   const handleIncrementCounter = () => {
//     if (count < maxValue) {
//       setCount((prevState) => prevState + 1);
//     }
//   };

//   const handleDecrementCounter = () => {
//     if (quantity < count) {
//       setCount((prevState) => prevState - 1);
//     }
//   };

//   return (
//     <div>
//       <div className="flex items-center bg-white overflow-hidden w-fit mx-auto">
//         <button
//           className="px-3 py-1 flex items-center justify-center bg-custome-cream"
//           onClick={handleIncrementCounter}
//         >
//           <span>+</span>
//         </button>

//         <p className="mx-3">{count}</p>

//         <button
//           className="px-3 py-1 flex items-center justify-center bg-custome-cream"
//           onClick={handleDecrementCounter}
//         >
//           <span>-</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default IncrementDecrementBtn;
