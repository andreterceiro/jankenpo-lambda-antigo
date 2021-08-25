exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: jankenpo(),
    };
    return response;
};

function jankenpo() {
    let rand = Math.random();
    if (rand < 0.3333) {
        return "pedra";
    } else if (rand < 0.6666) {
        return "papel";
    }
    return "tesoura";
 } 
