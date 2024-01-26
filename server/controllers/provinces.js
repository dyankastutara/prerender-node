const axios = require('axios');

module.exports = {
   provinces: async (req, res) => {
      let finalResult = {
         data: {},
         success: false,
         message: ""
      }
      try{
         const response = await axios.post(`${process.env.HOST_KIRIMINAJA}/api/mitra/province`, {}, {
				headers:{
					Authorization: process.env.API_KEY_KIRIMINAJA
				}
			})
         finalResult.data = response.data;
         finalResult.success = true;
         finalResult.message = "Sukses ambil data";
         res.status(200).json(response.data);
      }catch(e){
         finalResult.message = "Gagal ambil data";
         res.status(500).json(finalResult)
      }
   }
}