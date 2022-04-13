import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { GamesApiService } from '../games-api.service';
import { Genero } from '../games.model';
import { finalize } from 'rxjs/operators';

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
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private gamesApiService: GamesApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
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
      this.findById(id);
    }
  }

  findById(id: number) {
    this.loading = true;
    this.gamesApiService
      .findById(id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (game) => {
          if (game) {
            this.form.patchValue({
              ...game,
            });
          }
        },
        () =>
          this.messageService.error(
            `Erro ao buscar o game com código ${id}`,
            () => this.findById(id)
          )
      );
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
    // const nome = this.form.value.nome;
    const { nome } = this.form.value;

    this.loading = true;

    this.gamesApiService
      .save(this.form.value)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        () => {
          this.messageService.success(`Game ${nome} foi salvo sucesso!`);
          this.router.navigate(['games-list']);
        },
        () => {
          this.messageService.error(`Erro ao salvar o game ${nome}`, () =>
            this.salvar()
          );
        }
      );
  }
}
