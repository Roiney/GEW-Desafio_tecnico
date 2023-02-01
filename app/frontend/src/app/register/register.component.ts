import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { CustomValidators } from '../costum-validator';
import IMask from 'imask';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    nome: new FormControl(null, [Validators.required]),
    data_nascimento: new FormControl(null, [Validators.required]),
    CEP: new FormControl(null, [Validators.required]),
    endereco: new FormControl(null, [Validators.required]),
    cidade: new FormControl(null, [Validators.required]),
    estado: new FormControl(null, [Validators.required]),
    senha: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  },
    { validators: CustomValidators.passwordsMatching }
  )

  constructor(
    private authService: AuthServiceService,
    private router: Router,
  ) { }

  cepMask = { mask: "00000-000" }

  consultaCEP(cep: any, f: any) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.authService.cep(cep)
        .subscribe(dados =>  this.populaDadosForm(dados, f));
    }
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    return filterValue;

  }



  populaDadosForm(dados: any, formulario: any) {
    formulario.form.patchValue({
        endereco: dados.logradouro + "" +  dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
    });

    // console.log(form);
  }
  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.authService.cadastro(this.registerForm.value).subscribe(result => {
      if (result)
        alert(result)
    });
  }

}