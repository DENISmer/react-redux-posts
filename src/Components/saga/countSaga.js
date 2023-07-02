import {put} from 'redux-saga/effects'
import {incrementCreator} from "./countReducer";


const delay = (ms) => new Promise(res => setTimeout(res,ms))



function* incrementWorker(){
    yield delay(1000)
}


function* decrementWorker(){

}


function* countWatcher(){

}