// here we create associations

const StudentDetails = require('./student-details');
const IdentityCardDetails = require('./identity-card');

//one to one releationshiop/associations
StudentDetails.hasOne(IdentityCardDetails);
IdentityCardDetails.belongsTo(StudentDetails);

module.exports={
     StudentDetails,
     IdentityCardDetails
}