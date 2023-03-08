const receitaModel = require("../models/Receita");
const MedicoModel = require("../models/Medico");


module.exports = class ReceitaController
{

    //rota de cadastro --> retorna uma receita
    static async cadastro(req, res){
        let {nome_paciente,lista_de_medicamentos,lista_de_indicacoes,validade,email} = req.body;
      
        const medico = await MedicoModel.findOne({email}).select('-senha')
        
        const receita = new receitaModel({
            hash:medico.token,
            nome_paciente,
            lista_de_medicamentos,
            lista_de_indicacoes,
            validade,
            autor:medico._id
        });

        const new_receita = await receita.save(); //salvado receita
        res.json({new_receita})}
    
    //rota para pegar todas as receitas --> retorna todas as receitas de um médico1*q   996 q
    static async get_receita(req,res){
        let id = req.params.id
        const medico = await MedicoModel.findOne({_id:id}).select('-senha')
        let receitas = await receitaModel.find({autor:medico._id})
        res.json({receitas})
    }

    static async delete_receita(req, res)
    {
        let receita_id = req.params.id;
        const receita = await receitaModel.findOneAndRemove({_id: receita_id})
        return res.json({receita})
        

    }
        

}
