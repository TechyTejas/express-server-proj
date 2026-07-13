// here we create associations

const StudentDetails = require('./student-details');
const IdentityCardDetails = require('./identity-card');
const Department = require('./department');

//one to one releationshiop/associations
StudentDetails.hasOne(IdentityCardDetails, { foreignKey: 'cardNo' });   // A single student has exactly one identity card.
IdentityCardDetails.belongsTo(StudentDetails, { foreignKey: 'cardNo' }); // Every identity card belongs to one student.

// one to many relationship/associations
Department.hasMany(StudentDetails, {foreignKey: 'departmentId'});
StudentDetails.belongsTo(Department, {foreignKey: 'departmentId'})

module.exports={
     StudentDetails,
     IdentityCardDetails,
     Department
}