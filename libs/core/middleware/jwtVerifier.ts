import {
    jwtVerify
} from "../helpers";
import errHandler from "../helpers/errHandler";
export async function jwtTokenChecking(req, res, next) {
    let objResponceType = {
        "Content-Type": "application/json",
        "Last-Modified": new Date().toUTCString()
    };
    try {
        const strToken = await req.headers["x-access-token"] || req.headers["authorization"];
        if (strToken) {
            console.log("strToken");
            console.log(strToken);
            if (strToken) {
                const objOption = {
                    issuer: "issuer",
                    subject: "IP",
                    audience: "ABDU"
                }
                //Verify token
                const objTokenDecoded = await jwtVerify(strToken, objOption)
                req["intUserId"] = objTokenDecoded["intUserId"]
                req["strUserType"] = objTokenDecoded["strUserType"]
                req["strToken"] = strToken
                next()
            } else {
                return res
                    .status(401)
                    .set(objResponceType)
                    .send(new errHandler("INVALID_TOKEN_PROVIDED").send().body);
                //No loginn
            }
        } else {
                return res
                    .status(401)
                    .set(objResponceType)
                    .send(
                        new errHandler("AUTHORIZATION_TOKEN_HEADER_IS_MISSING").send().body
                    );
        }
    } catch (error) {
        return res
            .status(401)
            .set(objResponceType)
            .send(new errHandler(error).send().body);
    }
}