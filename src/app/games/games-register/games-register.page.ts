import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: ['', Validators.required],
      lancamento: [''],
      genero: [Genero.ACAO, Validators.required],
      foto: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const game = this.gamesService.findById(id);
    if (game) {
      this.form.patchValue({
        ...game,
        lancamento: game.lancamento && game.lancamento.toISOString(),
      });
    }
  }

  salvar() {
    this.gamesService.save(this.form.value);
    this.router.navigate(['games-list']);
  }
}
