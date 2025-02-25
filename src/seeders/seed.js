const db = require('../models');
const { Student, Tutor } = db;

const seed = () => {
  const studentInfo = [
    { email: 's1@gmail.com' },
    { email: 's2@gmail.com' },
    { email: 's3@gmail.com' },
    { email: 's4@gmail.com' },
    { email: 's5@gmail.com' },
    { email: 's6@gmail.com' },
  ];
  const tutorInfo = [
    { email: 't1@gmail.com' },
    { email: 't2@gmail.com' },
    { email: 't3@gmail.com' },
  ];

  return db.sequelize.transaction(async (transaction) => {
    const tutors = await Tutor.bulkCreate(tutorInfo, {
      ignoreDuplicates: true,
      transaction,
    })
    const students = await Student.bulkCreate(studentInfo, {
      ignoreDuplicates: true,
      transaction,
    })
  
    return {
      tutors,
      students,
    }
  })
};

module.exports = seed;
