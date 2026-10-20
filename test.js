const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

// Mock routes (same as backend sample)
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/api/data', (req, res) => {
  const userData = req.body;
  res.json({
    message: 'Data received successfully',
    data: userData
  });
});

describe('Backend API Tests', () => {
  it('GET / should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello from the backend!');
  });

  it('POST /api/data should return JSON with user data', async () => {
    const sampleData = { name: 'Guna', age: 25 };
    const res = await request(app).post('/api/data').send(sampleData);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Data received successfully');
    expect(res.body.data).toEqual(sampleData);
  });

  it('POST /api/data with empty body should still respond', async () => {
    const res = await request(app).post('/api/data').send({});
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toEqual({});
  });
});
