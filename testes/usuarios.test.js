const request = require('supertest')

test('Teste de visualização de todos os usuários', async ()=>{
    await request('http://localhost:3001')
    .get('/usuario')
    .expect(200)
    .then((response)=>console.log('Tudo rodando OK'))
})

test('Teste de visualização de usuarios com parâmetro', async ()=>{
    await request('http://localhost:3001')
    .get('/usuario/:id')
    .expect(200)
    .then((response)=>console.log('Tudo rodando OK'))
})

test('Teste de adição de usuários', async ()=>{
    await request('http://localhost:3001')
    .post('/usuario')
    .expect(201)
    .then((response)=>console.log('Tudo rodando OK'))
})

test('Teste de deleção de usuários', async ()=>{
    await request('http://localhost:3001')
    .put('/usuario/:id')
    .expect(200)
    .then((response)=>console.log('Tudo rodando OK'))
})

test('Teste de alteração de usuários', async ()=>{
    await request('http://localhost:3001')
    .put('/usuario/:id')
    .expect(200)
    .then((response)=>console.log('Tudo rodando OK'))
})
