import { useState, useEffect } from 'react';

function TitleEditor() {
  const [title, setTitle] = useState("");

  // 🔧 Add useEffect here
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div>
      <h2>Update Page Title</h2>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default TitleEditor;