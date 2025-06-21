import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Kazanç Prensi Panel</h1>
      <p>Hoş geldiniz dostum 👑</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 300 }}>
        <input type="text" placeholder="Kullanıcı ID" required />
        <input type="text" placeholder="Kullanıcı Adı" required />
        <input type="password" placeholder="Şifre" required />
        <button type="submit">Giriş Yap</button>
      </form>
      <div style={{ marginTop: '2rem' }}>
        <button>Sweet Bonanza 1000x</button>
        <button>Gates of Olympus 1000x</button>
      </div>
    </div>
  );
}