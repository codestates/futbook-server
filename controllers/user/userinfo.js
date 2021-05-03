const { User } = require("../../models");

module.exports = async(req, res) => {
  const id = req.params.id

  const userInfo = await User.findOne({ where: { id } });
  
  if(!userInfo){
    res.status(400).send({ message: 'Invalid Id params' });
  } else {
    const { id, email, nickname } = userInfo; 
    res.status(200).send({ data: { userInfo: { id, email, nickname }}, message: 'succeeded in getting userInfo'});
  }
};

