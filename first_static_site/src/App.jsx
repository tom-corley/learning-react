import Counter from "./Counter"
import LoginControl from "./LoginControl"
import ToggleMessage from "./ToggleMessage"
import MessageController from "./MessageController"
import AdminStatus from "./AdminStatus"
import GuestList from "./GuestList"
import LikeTracker from "./LikeTracker"

function App() {
  return (
    <div>
      <h1>First React Page</h1>
      <p>The main `App` component is your first component.</p>
      <p> And the second one is this counter below: </p>
      <Counter />
      <p> And the third is this secret message thing: </p>
      <ToggleMessage />
      <p>The fourth is this log in and out button: </p>
      <LoginControl />
      <p> The fifth demonstrates the idea of lifting state up.</p>
      <MessageController />
      <p> The sixth is my own attempt at this pattern</p>
      <AdminStatus />
      <p> The seventh is my first attempt at rendering lists using map</p>
      <GuestList />
      <p> The eigth is a post tracker which adds a bit more complexity</p>
      <LikeTracker />
    </div>
  )
}

export default App