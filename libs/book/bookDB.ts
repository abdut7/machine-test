import {
    getPgConnection
} from '../core/helpers'
import errHandler from '../core/helpers/errHandler'
const getBookList = async ({
    header,
    body: objBodyData
}) => {
    const objDbConnection = await getPgConnection();
    try {
        const {
            intLimit,
            intOffSet
        } = objBodyData
        const strQuery = `SELECT     
        id ,
        "strName",
        "intPrice",
        "strAutherName",
        "strDescription",
        "createdTime" FROM tbl_book  OFFSET ${intOffSet || 0} LIMIT ${intLimit || 100} `
        const objResult = await objDbConnection.query(strQuery);
        return {
            arrList: objResult.rows || []
        }
    } catch (error) {
        throw new errHandler(error)
    } finally {
        objDbConnection.end();
    }
}

const createBook = async ({
    header,
    body: objBodyData
}) => {
    const objDbConnection = await getPgConnection();
    try {
        const {
            strName,
            intPrice,
            strAutherName,
            strDescription
        } = objBodyData
        const text = `INSERT INTO tbl_book ("strName", "intPrice", "strAutherName", "strDescription") VALUES ($1,$2,$3,$4) Returning id`;
        const values = [strName, intPrice || 0, strAutherName || '', strDescription || '']
        const objResult = await objDbConnection.query({text,values});
        if (objResult) {
            return {
                "strMessage": "Success"
            }
        }
        return {
            "strMessage": "Failed"
        }
    } catch (error) {
        throw new errHandler(error)
    } finally {
        objDbConnection.end();
    }
}

const updateBook = async ({
    header,
    body: objBodyData
}) => {
    const objDbConnection = await getPgConnection();
    try {
        const {
            id,
            strName,
            intPrice,
            strAutherName,
            strDescription
        } = objBodyData
        if(!id){
            throw new errHandler("id missing")
        }
        const text = `UPDATE tbl_book "strName"=$1, "intPrice"=$2, "strAutherName"=$3, "strDescription"=$4 WHERE id=${id} `;
        const values = [strName, intPrice || 0, strAutherName || '', strDescription || '']
        const objResult = await objDbConnection.query({text,values});
        if (objResult) {
            return {
                "strMessage": "Success"
            }
        }
        return {
            "strMessage": "Failed"
        }

    } catch (error) {
        throw new errHandler(error)
    } finally {
        objDbConnection.end();
    }
}
export {
    getBookList,
    createBook,
    updateBook
}