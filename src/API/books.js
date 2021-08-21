import axios from "axios";
import {setBooks} from "../../redux/booksReducer";


const APIkey = 'AIzaSyAb3fge_koZ9rhDes_ZubBTjzRngjM4qR0'

export const getBooks = (searchQuery) => {
    return async (dispatch) => {
        const response =await axios.get(`https://www.googleapis.com/books/v1/volumes?q='Love':&apikey=${APIkey}`)
        dispatch(setBooks(response.data))
        console.log(response.data)
    }
}