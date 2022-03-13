import express from 'express'
import {
    intPort
} from './config/port'
import bodyParser from "body-parser";
import cors from "cors";
import errHandler from "../../libs/core/helpers/errHandler";
import routes from "./routes";
import {jwtTokenChecking} from '../../libs/core/middleware'
const objServiceApp: express.Application = express();
try {
    objServiceApp.use(cors());
    objServiceApp.use(jwtTokenChecking)
    objServiceApp.use(bodyParser.json());
    objServiceApp.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
    objServiceApp.use(function(err, req, res, next) {
        if (err instanceof SyntaxError && "body" in err) {
          res.status(400).send({
            errCommon: [{ strMessage: "INVALID_JSON" }]
          });
        } else next();
      });
    objServiceApp.use("/", routes);
    objServiceApp.listen(intPort, function () {
        console.log('App is listening on port ' + intPort);
    });
} catch (error) {
    console.log(new errHandler(error).send().body);
}