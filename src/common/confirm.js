function Confirm(props) {
    let promise = new Promise((resolve, reject) => {
        resolve('success');
        reject('fault');
    });

    return (
        promise
    )
}


export default Confirm;