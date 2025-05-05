* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f8f9fb;
  color: #333;
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 2rem 1rem;
}

.header {
  background: linear-gradient(135deg, #6C63FF, #928DFF);
  color: white;
  text-align: center;
  padding: 3rem 1rem;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

.header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 1.1rem;
}

.nav-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: white;
  padding: 1rem;
  gap: 0.5rem;
  border-bottom: 1px solid #eee;
}

.nav-tabs a {
  text-decoration: none;
  color: #6C63FF;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  transition: 0.3s;
}

.nav-tabs a.active,
.nav-tabs a:hover {
  background: #6C63FF;
  color: white;
}

main h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #6C63FF;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.card {
  background: white;
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
}

input, textarea, button {
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  height: 120px;
}

button {
  background: #6C63FF;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #574fd6;
}

footer {
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  background: #f1f2f7;
  margin-top: 2rem;
}

.hidden {
  display: none;
}

/* Responsivo */
@media (max-width: 600px) {
  .header h1 {
    font-size: 1.5rem;
  }

  .nav-tabs {
    flex-direction: column;
    align-items: center;
  }
}
