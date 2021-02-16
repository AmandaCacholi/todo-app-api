const request = require('supertest')

test('Teste de visualização de todas as tarefas', async ()=>{
    await request('http://localhost:3001')
    .get('/tarefa')
    .expect(200)
    .then((response)=>console.log('Tudo rodando OK'))
})

test('Teste de visualização de tarefas com parâmetro', async ()=>{
    await request('http://localhost:3001')
    .get('/tarefa/:id')
    .expect(200)
    .then((response)=>console.log('Tudo rodando OK'))
})

test('Teste de adição de tarefas', async ()=>{
    await request('http://localhost:3001')
    .post('/tarefa')
    .expect(201)
    .then((response)=>console.log('Tudo rodando OK'))
})

test('Teste de deleção de tarefas', async ()=>{
    await request('http://localhost:3001')
    .put('/tarefa/:id')
    .expect(200)
    .then((response)=>console.log('Tudo rodando OK'))
})

test('Teste de alteração de tarefas', async ()=>{
    await request('http://localhost:3001')
    .put('/tarefa/:id')
    .expect(200)
    .then((response)=>console.log('Tudo rodando OK'))
})