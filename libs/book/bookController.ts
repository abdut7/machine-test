import errHandler from '../core/helpers/errHandler'
export function createBookControllerFactory({
    createBook
}) {
    return async function createBookController({
        body: objBookBody,
        ...source
    }) {
        try {
            return {
                body: await createBook({
                    header:source,
                    body: objBookBody
                })
            };
        } catch (error) {
            let objError = new errHandler(error);
            return objError.send();
        }
    }
}


export function getBookListControllerFactory({
    getBookList
}) {
    return async function getBookListController({
        body: objBookBody,
        ...source
    }) {
        try {
            return {
                body: await getBookList({
                    header:source,
                    body: objBookBody
                })
            };
        } catch (error) {
            let objError = new errHandler(error);
            return objError.send();
        }
    }
}


export function updateBookControllerFactory({
    updateBook
}) {
    return async function updateBookController({
        body: objBookBody,
        ...source
    }) {
        try {
            return {
                body: await updateBook({
                    header:source,
                    body: objBookBody
                })
            };
        } catch (error) {
            let objError = new errHandler(error);
            return objError.send();
        }
    }
}
