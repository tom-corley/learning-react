import Counter from "./Counter"
import LoginControl from "./LoginControl"
import ToggleMessage from "./ToggleMessage"
import MessageController from "./MessageController"
import AdminStatus from "./AdminStatus"
import GuestList from "./GuestList"
import LikeTracker from "./LikeTracker"
import TaskList from "./TaskList"

function App() {
  return (
    <div>
      <h1>First React Page</h1>
      <h4>The main `App` component is the first component.</h4>
      <h4> And the second one is this counter below: </h4>
      <Counter />
      <h4> And the third is this secret message thing: </h4>
      <ToggleMessage />
      <h4>The fourth is this log in and out button: </h4>
      <LoginControl />
      <h4> The fifth demonstrates the idea of lifting state up.</h4>
      <MessageController />
      <h4> The sixth is my own attempt at this pattern</h4>
      <AdminStatus />
      <h4> The seventh is my first attempt at rendering lists using map</h4>
      <GuestList />
      <h4> The eigth is a post tracker which adds a bit more complexity</h4>
      <LikeTracker />
      <h4> The ninth is a task list to practice rendering lists.</h4>
      <TaskList />
    </div>
  )
}

export default App