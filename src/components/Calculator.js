export default function Calculator(params) {

    const queryParams = params.path.split("/").filter(parameter => parameter.length > 0);

    let message
    let wrongArgumentCount = false

    if (queryParams.length !== 3) {
        wrongArgumentCount = true
        message = "Wrong argument count"
    } else {
        switch (queryParams[0]) {
            case 'add':
                message = `${queryParams[1]} + ${queryParams[2]} = ${+queryParams[1] + +queryParams[2]}`
                break
            case 'sub':
                message = `${queryParams[1]} - ${queryParams[2]} = ${+queryParams[1] - +queryParams[2]}`
                break
            case 'div':
                message = `${queryParams[1]} / ${queryParams[2]} = ${+queryParams[1] / +queryParams[2]}`
                break
            case 'mul':
                message = `${queryParams[1]} x ${queryParams[2]} = ${+queryParams[1] * +queryParams[2]}`
                break
            default:

        }
    }

    return <>
        <h1>Calculator is ready</h1><br/>
        {wrongArgumentCount ? <h3>{message}</h3> : <h3>Your operation: {message}</h3>}
    </>
}