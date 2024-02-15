// backend/routes/user.js
const express = require('express');

const router = express.Router();
const zod = require("zod");
const { Account } = require("../Db");
const {authMiddleware} = require('../middleware');
const { default: mongoose } = require('mongoose');


//An endpoint for user to get their balance.
router.get('/balance', authMiddleware, async (req, res)=>{
    const account = await Account.findOne({userId : req.userId});

    const balance = account.balance;

    return res.status(200).json({
        balance
    })
})

/*
    An endpoint for user to transfer money to another account
    Method: POST
    Route: /api/v1/account/transfer
    Body : {
        to: string,
        amount: number
    }
*/

const amountTransferBody = zod.object({
    to: zod.string(),
    amount: zod.number()
})
router.post('/transfer', authMiddleware, async (req, res)=>{

    const {success} = amountTransferBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message : "Invalid Input"
        })
    }

    const { amount, to } = req.body;

     /* Code without session 

    const account = await Account.findOne({userId : req.userId});

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    const toAccount = await Account.findOne({userId : to});
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    await Account.updateOne({userId : req.userId}, {$inc : {balance : -(amount)}});

    await Account.updateOne({userId : to}, {$inc : {balance : amount}});

    return res.status(201).json({
        message : "Transfer Successfull.."
    }) */


    /*Code using session */
    const session = await mongoose.startSession();

    session.startTransaction();

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });

})
module.exports = router;