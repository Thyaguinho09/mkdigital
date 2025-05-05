body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9fb;
  color: #333;
}

.wrapper {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  background-color: #1c2b3a;
  color: #fff;
  padding: 1rem;
}

.logo {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  border-radius: 5px;
}

.sidebar li:hover,
.sidebar li.active {
  background-color: #2f3e52;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-criar {
  background-color: #6c63ff;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.tabs {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.tab-btn {
  background: #e8eaf1;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.tab-btn.active {
  background: #6c63ff;
  color: #fff;
}

.tab-content {
  display: none;
  margin-top: 2rem;
}

.tab-content.active {
  display: block;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

th, td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

th {
  background: #f5f5f5;
  text-align: left;
}

.status {
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status.ativo {
  background: #d1f5e0;
  color: #1a8f53;
}

.status.pendente {
  background: #fff1c6;
  color: #b07d00;
}

.btn-acao {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
