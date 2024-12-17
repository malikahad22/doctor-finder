const email_template = (code) => {
    return `
   <!DOCTYPE html>
   <html>
   <head>
       <style>
           body {
               font-family: Arial, sans-serif;
               margin: 0;
               padding: 0;
               background-color: #f4f4f4;
           }
           .container {
               max-width: 600px;
               margin: 20px auto;
               background: #ffffff;
               border-radius: 8px;
               box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
               overflow: hidden;
               padding: 20px;
           }
           .header {
               text-align: center;
               padding: 20px 0;
               background-color: #007bff;
               color: white;
           }
           .header h1 {
               margin: 0;
               font-size: 24px;
           }
           .content {
               padding: 20px;
               text-align: center;
           }
           .content p {
               font-size: 16px;
               color: #333;
           }
           .otp {
               font-size: 24px;
               font-weight: bold;
               color: #007bff;
               margin: 20px 0;
           }
           .footer {
               text-align: center;
               padding: 10px;
               font-size: 12px;
               color: #777;
           }
       </style>
   </head>
   <body>
       <div class="container">
           <div class="header">
               <h1>Your OTP Code</h1>
           </div>
           <div class="content">
               <p>Use the following OTP to complete your verification process:</p>
               <div class="otp">${code}</div>
               <p>This code will expire after 10 minutes</p>
               <p>If you did not request this, please ignore this email.</p>
           </div>
           <div class="footer">
               <p>Thank you for using our service!</p>
           </div>
       </div>
   </body>
   </html>
   `;
};

module.exports = email_template;