import { useState, useEffect } from 'react';

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
        const res = await fetch("https://randomuser.me/api/")
        const data = await res.json();
        setUser(data.results[0])
        setLoading(false)
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Random User</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default RandomUser;
