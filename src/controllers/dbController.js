var sqlite3 = require('sqlite3').verbose()

var db = new sqlite3.Database('cadPessoas.db', (err) => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados')
  } else {
    console.log('Conexão efetuada com sucesso!')
  }
})

db.run(
  'CREATE TABLE IF NOT EXISTS pessoas(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50), telefone VARCHAR(50))'
)

module.exports = {
  async listarPessoas (req, res) {
    await db.all('SELECT * FROM pessoas', (err, rows) => {
      return res.json(rows)
    })
  },

  async cadastrarPessoa (req, res) {
    const pessoa = await req.body
    await db.run('INSERT INTO pessoas (nome, telefone) VALUES (?,?)', [pessoa.nome, pessoa.telefone])
    return res.json(pessoa)
  }
}
