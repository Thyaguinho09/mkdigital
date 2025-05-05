* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #fafafa;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header {
  background: linear-gradient(135deg, #7b2ff7, #f107a3);
  color: white;
  padding: 4rem 1rem;
  text-align: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

.header h1 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.nav-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: -1.5rem auto 1.5rem;
  max-width: 800px;
  gap: 0.5rem;
}

.nav-tabs a {
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  color: #7b2ff7;
  transition: all 0.3s;
  background: #f2f2f2;
}

.nav-tabs a.active,
.nav-tabs a:hover {
  background: #7b2ff7;
  color: white;
}

main h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #7b2ff7;
  text-align: center;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea, button {
  padding: 0.9rem 1rem;
  border-radius: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

button {
  background: #7b2ff7;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #5d22c9;
}

footer {
  text-align: center;
  padding: 2rem 1rem;
  background: #f2f2f2;
  font-size: 0.9rem;
  color: #666;
  margin-top: 3rem;
  border-top: 1px solid #ddd;
}

.hidden {
  display: none;
}

/* Responsivo */
@media (max-width: 600px) {
  .header h1 {
    font-size: 1.8rem;
  }

  .nav-tabs {
    flex-direction: column;
    align-items: center;
  }
}
