// App.js
import React, { useState } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import ImageInput from './ImageInput';
import PasswordInput from './PasswordInput';

const App = () => {
  const [id, setId] = useState('');
  const [photo, setPhoto] = useState(null);
  const [friendId, setFriendId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('photo', photo);
      formData.append('friendId', friendId);
      formData.append('password', password);

      // Replace 'http://localhost:5000/submit' with your actual backend endpoint
      const response = await axios.post('http://127.0.0.1:5500/', formData);

      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput label="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <ImageInput label="Photo" onChange={(e) => setPhoto(e.target.files[0])} />
        <TextInput label="Friend ID" value={friendId} onChange={(e) => setFriendId(e.target.value)} />
        <PasswordInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
