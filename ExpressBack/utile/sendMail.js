const express = require('express')

const nodemailer = require("nodemailer")

async function sendMail(mailSender,listmail) {
    console.log('Hello elo')
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'wendydarling1215@gmail.com', // generated ethereal user
            pass: 'onbyvskabveufadg', // generated ethereal password
        },
    });
    // send mail with defined transport object
    const msg = {
        from: mailSender, // sender address
        to: listmail.join(','), // list of receivers
        subject: "Nouvelle assignment disponible sur la plateforme étudiante", // Subject line
        text: "Bonjour à tous, \n" +

            "Je vous informe qu'une nouvelle assignment a été mise en ligne sur la plateforme étudiante/prof. Merci de bien vouloir vérifier la plateforme dès que possible pour prendre connaissance des détails et des instructions. \n" +

            "N'hésitez pas à me contacter si vous avez des questions ou des difficultés. \n" +

            "Bonne journée à tous, "
    };
    const info = transporter.sendMail(msg, function (error, ifon) {
        console.log("Vo anomboka")
        if (error) {
            console.log("TSY METY")
            console.log(error)
        } else {
            console.log("METY")
            console.log(" email send " + info.response)
        }
    });
}

exports.sendMail = sendMail;