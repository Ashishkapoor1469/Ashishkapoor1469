// Description: Validate middleware for validating request body.

const validate =(schema) => async (req,res,next)=>{

    try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
} catch (err) {
    const status = 422;


    const    message= "Input not filled properly";
    const   extraDetails = err.errors.map((err) => err.message).join(", ");

    const error = {
        status,
        message,
        extraDetails
    }
    console.log(error);
//   res.status(400).json({ msg: massage }); 
next(error)
}
};

module.exports = validate;