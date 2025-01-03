const responseFormatter = (req, res, next) => {

   res.success = (data, message = "Success", statusCode = 200) => {
      res.status(statusCode).json({
         statusCode,
         success: true,
         message,
         data,
      });
   };

   res.error = (error, message = "An error occurred", statusCode = 500) => {
      console.log("Error", error?.message);
      res.status(statusCode).json({
         statusCode,
         success: false,
         message,
         data: null
      });
   };

   next();
};

module.exports = responseFormatter;
