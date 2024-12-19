const { Op, where } = require('sequelize');
const PatientService = require('../patient/index');
const DoctorService = require('../doctor/index');
const { users, userRoles, patients, doctors } = require('../../../models');
class UsersService {

   constructor() {
      this.patient = new PatientService();
      this.doctor = new DoctorService();
   }

   get_users = async () => {
      const response = await users.findAll({
         where: {
            isDeleted: false
         },
         include: [
            { model: userRoles, as: 'role' },
            { model: patients, as: 'patient' },
            { model: doctors, as: 'doctor' }
         ],
         attributes: {
            exclude: ['userRoleId', 'password']
         }
      });
      return response;
   }

   get_user_by_phone_email = async (email, phoneNo) => {
      try {
         const user = await users.findOne({
            where: {
               [Op.or]: [{ email: email }, { phoneNo: phoneNo }]
            }
         });
         return user;
      } catch (error) {
         throw error;
      }
   }

   get_user_by_id = async (id, email) => {
      try {
         const objQuery = id ? { id: id } : { email: email }
         const result = await users.findOne({
            where: objQuery
         });
         return result;
      } catch (error) {
         throw error;
      }
   }

   create_user = async (data) => {
      try {
         const { emergency_phone, role, experience, bio, location, ...restData } = data;
         let preRes = null;
         let isPatient = role === 'patient';

         if (isPatient) {
            preRes = await this.patient.create_patient({ emergency_phone });
         } else {
            preRes = await this.doctor.create_doctor({ experience, bio, location });
         }

         if (!preRes) throw new Error(`${role} is note created`);

         if (isPatient) {
            restData['patientId'] = preRes.id;
         } else {
            restData['doctorId'] = preRes.id;
         }
         const response = await users.create(restData, {
            include: [
               {
                  model: isPatient ? patients : doctors,
                  as: isPatient ? 'patient' : 'doctor',
               }
            ]
         });
         return response;
      } catch (error) {
         throw error;
      }
   }

   delete_user = async (id) => {
      try {
         const result = await users.update({ isDeleted: true }, {
            where: { id: id },
         });
         return result;
      } catch (error) {
         throw error;
      }
   }

   update_user = async (data, id = null, em = null) => {
      try {

         const queryObj = id ? { id: id } : { email: em };
         const result = await users.update(data, {
            where: queryObj
         });
         return result;

      } catch (error) {
         throw error;
      }
   }




}

module.exports = UsersService;