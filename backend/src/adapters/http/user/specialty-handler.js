export default class SpecialtyHandler {
    constructor(specialtyUseCases) {
      this.specialtyUseCases = specialtyUseCases;
    }
  
    findAllSpecialties = async (req, res) => {
      try {
        const [specialties, status, err] = await this.specialtyUseCases.findAllSpecialties();
        if (err)
          return res.status(status).send({
            message: "fail",
            errors: err,
          });
        return res.status(status).send({
          message: "success",
          data: specialties,
        });
      } catch (error) {
        return res.status(500).send({
          message: "There was internal server error",
          errors: error,
        });
      }
    };
    
  
    findSpecialtyById = async (req, res) => {
      try {
        
        const [specialty, status, err] = await this.specialtyUseCases.findSpecialtyById(req.params.id);
        if (err)
          return res.status(status).send({
            message: "fail",
            errors: err,
          });
        return res.status(status).send({
          message: "success",
          data: specialty,
        });
      } catch (error) {
        return res.status(500).send({
          message: "There was internal server error",
          errors: error,
        });
      }
    };
  
    createNewSpecialty = async (req, res) => {
      try {
        const [specialty, status, err] = await this.specialtyUseCases.createNewSpecialty(req.body);
        if (err)
          return res.status(status).send({
            message: "fail",
            errors: err,
          });
        return res.status(status).send({
          message: "success",
          data: specialty,
        });
      } catch (error) {
        console.error(error)
        return res.status(500).send({
          message: "There was internal server error",
          errors: error,
        });
      }
    };
  
    updateSpecialtyById = async (req, res) => {
      try {
        
        const [specialty, status, err] = await this.specialtyUseCases.updateSpecialtyById(req.params.id, req.body);
        if (err)
          return res.status(status).send({
            message: "fail",
            errors: err,
          });
        return res.status(status).send({
          message: "success",
          data: specialty,
        });
      } catch (error) {
        return res.status(500).send({
          message: "There was internal server error",
          errors: error,
        });
      }
    };
  
    deleteSpecialtyById = async (req, res) => {
      try {
        const { specialtyId } = req.params;
        const [specialty, status, err] = await this.specialtyUseCases.deleteSpecialtyById(specialtyId);
        if (err)
          return res.status(status).send({
            message: "fail",
            errors: err,
          });
        return res.status(status).send({
          message: "success",
          data: specialty,
        });
      } catch (error) {
        return res.status(500).send({
          message: "There was internal server error",
          errors: error,
        });
      }
    };
  }
  