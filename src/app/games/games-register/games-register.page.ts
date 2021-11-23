import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genero } from '../games.model';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-register',
  templateUrl: './games-register.page.html',
  styleUrls: ['./games-register.page.scss'],
})
export class GamesRegisterPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gamesService: GamesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: ['', Validators.required],
      lancamento: [''],
      genero: [Genero.ACAO, Validators.required],
      foto: ['', Validators.required],
    });
  }

  salvar() {
    this.gamesService.save(this.form.value);
    this.router.navigate(['games-list']);
  }
}
