import query from '../config/db.js';
import { createQuery } from '../query/install.query.js';



const installService = {
   async install() {
      let tableResponse =[];
      for (let i = 0; i < createQuery.length; i++) {
        tableResponse[i] = query(createQuery[i]);
        
   }
      return status(200).json({
         message: this.tableResponse[0]
      });
     }
}
export default installService;