
const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('Home endpoint should return welcome message', async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://localhost:${server.address().port}/`
        );
        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(
            data.message,
            'Welcome to My DevOps Project!'
        );
    } finally {
        server.close();
    }
});

test('Health endpoint should return server status', async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://localhost:${server.address().port}/health`
        );
        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(
            data.status,
            'Server is running successfully'
        );
    } finally {
        server.close();
    }
});

test('Project information endpoint should return project details', async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://localhost:${server.address().port}/api/info`
        );
        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.project, 'DevOps Project');
    } finally {
        server.close();
    }
});
