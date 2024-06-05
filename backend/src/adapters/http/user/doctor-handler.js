export default class Doctorhandler {
    constructor(doctorUseCases) {
        this.doctorUseCases = doctorUseCases;
}


 findAllDoctors = async (req, res) => {
    try {
      const [doctors, status, err] = 
        await this.doctorUseCases.findAllDoctors (req.body);
    if (err)
     return res.status(status).send({
        message: "fail",
        errors: err,
    });
    return res.status(status).send({
        message: "success",
        data: doctors,
    });
    } catch (error) {
        return res.status(500).send({
            message: "There was internal server error",
            errors: error,
    });
    }
};

findDoctorById = async (req, res) => {
    try{
      const {doctorid} = req.params; 
      const [doctor, status, err] = await this.doctorUseCases.findDoctorById(doctorid);
        if (err)
        return res.status(status).send({
            message: "fail",
            errors: err,
        });
        return res.status(status).send({
            message: "success",
            data: doctor,
        });
    } catch {
        return res.status(500).send({
            message: "There was internal server error",
            errors: error,
        });
    }
};

createNewDoctor = async (req, res) => {
    try{
        const[doctor, status, err] = await this.doctorUseCases.createNewDoctor(req.body)
        if (err)
        return res.status(status).send({
           message: "fail",
           errors: err,
    });
    return res.status(status).send({
        message: "success",
        data: doctor,
    });
}catch (error) {
    return res.status(500).send({
        message: "There was internal server error",
        errors: error,
    });
}
};

updateDoctorById = async (req, res) => {
    try{
        const {doctorid} = req.params;
        const [user, status, err] = await this.doctorUseCases.updateDoctorById(doctorid, req.body);
        if (err)
        return res.status(status).send({
            message: "fail",
            errors: err,
        });
        return res.status(status).send({
            message: "success",
            data: user,
        });
    } catch {
        return res.status(500).send({
            message: "There was internal server error",
            errors: error,
        });
    }
};

deleteDoctorById = async (req, res) => {
    try{
        const {doctorid} = req.params;
        const [doctor, status, err] = await this.doctorUseCases.deleteDoctorById(doctorid);
        if (err)
        return res.status(status).send({
            message: "fail",
            errors: err,
        });
        return res.status(status).send({
            message: "success",
            data: doctor,
        });
    } catch {
        return res.status(500).send({
            message: "There was internal server error",
            errors: error,
        });
    }

};

}

