const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Configurações
const PORT = process.env.PORT || 3000;

// Simulação de transações
const payments = []; 

// Rota para criar uma transação
app.post('/api/payments', (req, res) => {
    const { amount, currency, cardNumber, cardExpiry, cardCVC } = req.body;

    // Validações simples (simulação)
    if (!amount || !currency || !cardNumber || !cardExpiry || !cardCVC) {
        return res.status(400).json({ error: 'Dados do pagamento incompletos.' });
    }

    if (cardNumber === '4000000000000002') {
        // Simulação de cartão recusado
        return res.status(400).json({ error: 'Pagamento recusado pelo emissor do cartão.' });
    }

    // Criar uma transação simulada
    const transaction = {
        id: `txn_${Math.random().toString(36).substr(2, 9)}`,
        amount,
        currency,
        status: 'approved',
        createdAt: new Date().toISOString(),
    };

    payments.push(transaction);

    res.status(201).json({
        message: 'Pagamento aprovado.',
        transaction,
    });
});

// Rota para consultar transações
app.get('/api/payments', (req, res) => {
    res.json(payments);
});

// Rota para consultar uma transação específica
app.get('/api/payments/:id', (req, res) => {
    const transaction = payments.find((p) => p.id === req.params.id);

    if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada.' });
    }

    res.json(transaction);
});

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor de simulação rodando na porta ${PORT}`);
});
