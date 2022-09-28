//  all local-storage functionalities related this project 

let getFromLocalStorage = () => {
    let breakTime = localStorage.getItem('break-time');
    return breakTime;
}

let sendToLocalStorage = (data) => {
    localStorage.setItem('break-time', data);
}

export { getFromLocalStorage, sendToLocalStorage };