import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { GamesApiService } from '../games-api.service';
import { Genero } from '../games.model';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-register',
  templateUrl: './games-register.page.html',
  styleUrls: ['./games-register.page.scss'],
})
export class GamesRegisterPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gamesApiService: GamesApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('GamesRegisterPage ngOnInit');
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: ['', Validators.required],
      lancamento: [''],
      genero: [Genero.ACAO, Validators.required],
      foto: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.gamesApiService.findById(id).subscribe((game) => {
        if (game) {
          this.form.patchValue({
            ...game,
          });
        }
      });
    }
  }

  ionViewWillEnter(): void {
    console.log('GamesRegisterPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('GamesRegisterPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('GamesRegisterPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('GamesRegisterPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('GamesRegisterPage ngOnDestroy');
  }

  salvar() {
    this.gamesApiService
      .save(this.form.value)
      .subscribe(() => this.router.navigate(['games-list']));
  }
}
