
var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport'); // this is important

module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'aadiitya.aspire@gmail.com',
            auth: {
              user: 'aadiitya.aspire@gmail.com',
              pass: 'meretdswjcelsuvh',
            }
          });
          
          var mailOptions = {
            from: 'aadiitya.aspire@gmail.com',
            to: 'aadiitya.aspire@gmail.com',
            subject: 'Sending Email using Node.js[nodemailer]',
            text: 'That was easy!'
          };
        
        console.log('kuch hua')

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log("response:::::",error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });  
//         try{
// //             // await strapi.plugins['email'].services.email.send({
// //             //   to: 'akhouriaditya97@gmail.com',
// //             //   from: 'harshitaditya97@gmail.com', // e.g. single sender verification in SendGrid
// //             //   cc: 'valid email address',
// //             //   bcc: 'valid email address',
// //             //   replyTo: 'akhouriaditya97@gmail.com',
// //             //   subject: 'The Strapi Email plugin worked successfully',
// //             //   text: '${fieldName}', // Replace with a valid field ID
// //             //   html: 'Hello world!', 
            
                
//             // })
//             await strapi.plugins['email'].services.email.send({
//                 to: 'akhouriaditya97@gmail.com',
//                 from: 'harshitaditya97@gmail.com', //e.g. single sender verification in SendGrid
//                 cc: 'valid email address',
//                 bcc: 'valid email address',
//                 replyTo: 'akhouriaditya97@gmail.com',
//                 subject: 'The Strapi Email plugin worked successfully',
//                 text: 'Hello world!',
//                 html: 'Hello world!',
//               })
//             // await strapi.plugin("email").service("email").send({
//             //     to: "ronak.rajput@aspiresoftserv.com",
//             //     from: "aadiitya.aspire@gmail.com",
//             //     subject: "Hello world",
//             //     text: "Hello world",
//             //     html: `<h4>Hello world</h4>`,
//             //   });
//         }catch(err) {
//             console.log(err);
//         }


    }
}

