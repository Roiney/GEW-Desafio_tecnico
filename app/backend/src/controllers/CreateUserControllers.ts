import { Request, Response } from "express";
import {  hash } from 'bcryptjs';
import { CreateUserService } from "../service/CreateUserService";


export class CreateUserControllers {
    
    async handle (request: Request, response: Response){
        const { nome, email, data_nascimento, CEP, endereco, cidade, estado, senha } = request.body;
        
        const saltRounds = 10
        const passwordHash = await hash(senha, saltRounds)

        const service = new CreateUserService();

        const result = await service.execute({nome, email, data_nascimento, CEP, endereco, cidade, estado, passwordHash })
        

        if (result instanceof Error){
            return response.status(400).json("Erro ao cadastrar Usuário")
        }

        return response.json("Usuário cadastrado com sucesso!")
    }

    async getRole (request: Request, response: Response) {
        const { email, senha} = request.body;
      
       
        const service = new CreateUserService();
        
        const result = await service.login({email, senha});

        if (result instanceof Error){
            return response.status(400).json("senha incorreta")
        }

        return response.json("Bem vindo!")

      };
}