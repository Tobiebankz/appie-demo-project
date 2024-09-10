const FormModel = require("../models/FormModel");


const GetContact = (req, res) => {
    res.render("index", {
      home: true,
    });
  }


const PostContact = (req, res) => {
    const myQuote = req.body;
    const { firstName, lastName, course, message, phone } = req.body;}


module.exports = {GetContact, PostContact}