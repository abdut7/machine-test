import {
    getBookList,
    createBook,
    updateBook
} from './bookDB'
import {
    getBookListControllerFactory,
    createBookControllerFactory,
    updateBookControllerFactory
} from './bookController'

const getBookListController = getBookListControllerFactory({
    getBookList
})
const createBookController = createBookControllerFactory({
    createBook
})
const updateBookController = updateBookControllerFactory({
    updateBook
})

export {
    getBookListController,
    createBookController,
    updateBookController,
}