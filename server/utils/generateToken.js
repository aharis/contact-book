import jwt from "jsonwebtoken";

const jwtToken = (id) => {
    return jwt.sign({ id }, process.env.secretKey, {
        expiresIn: "30d"
    });
}

export default jwtToken;