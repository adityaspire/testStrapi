module.exports = ({  }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host:  'gmail',
          port:  587,
          secure: false,
          auth: {
            user: ('aadiitya.aspire@gmail.com'),
            pass: ('meretdswjcelsuvh'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'aadiitya.aspire@gmail.com',
          defaultReplyTo: 'aadiitya.aspire@gmail.com',
        },
      },
    },
    // ...
  });