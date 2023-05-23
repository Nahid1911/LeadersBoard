/* eslint-disable*/
import _ from 'lodash';
import './style.css';
import {setDataToLocalStorage, displayLeaderboard} from './localStorage';

const leadesrData = JSON.parse(localStorage.getItem('leadersData')) || [];

const submitBtn = document.getElementById('submit')

submitBtn.addEventListener("click", collectFormInfo)

function collectFormInfo(){
    const nameData = document.getElementById('nameInput').value;
    const scoreData = document.getElementById('scoreInput').value;
    
    let existingleadesrData = JSON.parse(localStorage.getItem('leadersData')) || [];
    let newObject = {
        name: nameData,
        score: scoreData,
    }
    existingleadesrData.push(newObject);
    document.getElementById('nameInput').value = '';
    document.getElementById('scoreInput').value = '';
    setDataToLocalStorage (existingleadesrData)
    displayLeaderboard(existingleadesrData);
}

displayLeaderboard(leadesrData);