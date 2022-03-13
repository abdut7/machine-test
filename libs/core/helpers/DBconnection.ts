import { Client } from "pg";
import errHandler from "./errHandler";
import {OBJ_DB_CONFIG} from '../../common/constants'
export async function getPgConnection() {
    try {
      if (OBJ_DB_CONFIG) {
        let objPgConnection = await new Client(OBJ_DB_CONFIG);
        await objPgConnection.connect();
        return objPgConnection;
      } else
        throw new errHandler(
          { strMessage: "CONFIGURATION_MISSING", objDetails: "DATABASE" },
          "errCommon"
        );
    } catch (error) {
      throw new errHandler(error, "errServer");
    }
  }