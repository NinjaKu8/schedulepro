import React from 'react'
import Moveable from 'react-moveable'

export const DesignStripEditor = () => {
  const targetRef = React.useRef<HTMLDivElement>(null)
  const downRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="root">
      <div className="container">
        <div className="target" ref={targetRef}>
          Target
        </div>

        <Moveable
          target={targetRef}
          draggable={true}
          throttleDrag={1}
          edgeDraggable={false}
          startDragRotate={0}
          throttleDragRotate={0}
          onDrag={(e) => {
            e.target.style.transform = e.transform
          }}
        />

        <div ref={downRef}>Down Ref here</div>
        <Moveable
          target={downRef}
          draggable={true}
          throttleDrag={1}
          edgeDraggable={false}
          startDragRotate={0}
          throttleDragRotate={0}
          onDrag={(e) => {
            e.target.style.transform = e.transform
          }}
        />
      </div>
    </div>
  )
}

// import Scena from './demo/Scena'

// export function DesignStripEditor(): JSX.Element {
//   return (
//     <div className="overflow-scroll h-100">
//       <div className="bg-white p-3">Hi! I'm a strip</div>

//       <Scena />
//     </div>
//   )
// }

// import MoveableComponent from "react-moveable";

// const MyComponent: React.FC = () => {
//   return (
//     <div>
//       <MoveableComponent
//         target={document.querySelector(".element-to-move")}
//         draggable={true}
//         resizable={true}
//         rotatable={true}
//         // Other options
//       />
//       <div className="element-to-move">Element to move</div>
//     </div>
//   );
// };
