import installService from '../services/install.service.js';

const installController = {
    async install(req, res, next) { 
    const installmessage = await installService.install();

    if (installmessage.status === 200) {
        res.status(200).json({
            message: installmessage
        }     
        );
    }
    else { 
        res.status(500).json({
            message: installmessage
        })
    }
   
}


};

export default installController;