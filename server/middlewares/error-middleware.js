const errorMiddleware = (error, req, res, next) => {
const status = error.status || 500;
const message = error.message || "Something went wrong in backend";
const extraDetails = error.extraDetails || "ERR from backend";

return res.status(status).json({ message, extraDetails });

};
module.exports = errorMiddleware;