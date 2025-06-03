import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const usuarios = [];

// Cadastrar usuário
app.post('/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  const existente = usuarios.find((u) => u.email === email);
  if (existente) {
    return res.status(400).json({ erro: 'Email já cadastrado' });
  }

  const novoUsuario = { nome, email, senha };
  usuarios.push(novoUsuario);

  res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso' });
});

// Login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  res.json({ mensagem: 'Login realizado com sucesso', usuario });
});

// Listar usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://192.168.18.2:${PORT}`);
});
