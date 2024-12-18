class Patient {
   constructor() { }
   async createPatient(req, resp) {
      try {

      } catch (error) {
         console.log("Error ", error?.message);
         resp.error('', 'Something went wrong!', 500);
      }
   }
}