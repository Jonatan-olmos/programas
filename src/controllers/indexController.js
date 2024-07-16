module.exports ={
    index :(req, res) => {
        return res.render('index', ({title : 'programas'}) )

    },
    calculadora : (req,res) => {
        return res.render ('aplicaciones/calculadora', ({title : 'calculadora'}))
    },

    clima : (req,res) => {
        return res.render ('aplicaciones/clima', ({title : 'clima'}))
    },
    reloj : (req,res) => {
        return res.render ('aplicaciones/reloj', ({title : 'reloj'}))
    },
    chatgpt : (req,res) => {
        return res.render ('aplicaciones/chatgpt', ({title : 'chatgpt'}))
    }
}