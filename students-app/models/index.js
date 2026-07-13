// here we create associations

const StudentDetails = require('./student-details');
const IdentityCardDetails = require('./identity-card');

//one to one releationshiop/associations
StudentDetails.hasOne(IdentityCardDetails, { foreignKey: 'cardNo' });
IdentityCardDetails.belongsTo(StudentDetails, { foreignKey: 'cardNo' });

module.exports={
     StudentDetails,
     IdentityCardDetails
}