const axios = require('axios');

module.exports = {
   provinces: async (req, res) => {
      try{
         const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/province`, {}, {
				headers:{
					Authorization: process.env.API_KEY_KIRIMINAJA
				}
			})
         res.status(200).send(response.data);
      }catch(e){
         res.status(500).send(e)
      }
   }
}