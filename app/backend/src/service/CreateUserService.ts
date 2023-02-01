import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { compare } from 'bcryptjs';
import generateToken from '../utilis/generateToken'

type UserRequest = {
nome: string;
email: string;
data_nascimento: string;
CEP: string;
endereco: string;
cidade: string;
estado: string;
passwordHash: string;
}

export class CreateUserService {

    async execute({nome, email, data_nascimento, CEP, endereco, cidade, estado, passwordHash}: UserRequest): Promise<User | Error> {
        const repo = getRepository(User);
        const senha = passwordHash;
        
        if(await repo.findOne({nome})) {
            return new Error("User alredy existes")
        }

        const user = repo.create({
            nome, 
            email, 
            data_nascimento, 
            CEP, 
            endereco, 
            cidade, 
            estado, 
            senha
        })

        await repo.save(user);
        
        return user;
    }

    async login({email, senha}): Promise<any | Error> {
        const repo = getRepository(User);
       
        
        const user = await repo.findOne({email});
        
        const isPasswordValid = await compare(senha, user.senha);
        
        if (!isPasswordValid) {
          return new Error("Incorrect password")
        }

        const payload = { username: user.email };
        const token = generateToken(payload);     
        
        return token
    }
}