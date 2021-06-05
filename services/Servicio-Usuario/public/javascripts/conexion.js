var mysql = require('mysql');

var con = mysql.createConnection({
  host: "67.207.80.187",
  user: "sa123",
  password: "1234",
  database: "SA"
})

//funcion que es para un insert
function insert_into(query){
    return new Promise(function(resolve, reject){
        con.query(
            query,
            function(err,result){
                if (err){
                    reject(new Error("Algun error en insertar en cliente"));
                } 
                else{
                    resolve(1);
                }
            }
        )
    })
}

//funcion para un select
function select_from(query){
    return new Promise(function(resolve, reject){
        con.query(
            query,
            function(err,rows){
                if(rows == undefined){
                    reject(new Error(err));
                }
                else{
                    resolve(rows);
                }
            }
        )
    })
}

module.exports.insert_into = insert_into;
module.exports.select_from = select_from;