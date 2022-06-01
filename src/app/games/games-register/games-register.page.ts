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
import { Platform } from 'src/app/platforms/platforms.model';
import { PlatformsService } from 'src/app/platforms/platforms.service';

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
  platforms: Platform[];

  constructor(
    private formBuilder: FormBuilder,
    private gamesApiService: GamesApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private platformService: PlatformsService
  ) {}

  ngOnInit() {
    console.log('GamesRegisterPage ngOnInit');

    this.platformService
      .findAll()
      .subscribe((platforms) => (this.platforms = platforms));

    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: ['', Validators.required],
      lancamento: [''],
      plataformas: [[]],
      genero: [Genero.ACAO, Validators.required],
      logo: ['', Validators.required],
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

  compareWith(o1: Platform, o2: Platform | Platform[]) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((u: Platform) => u.id === o1.id);
    }

    return o1.id === o2.id;
  }

  salvar() {
    // const value = this.form.value;
    const { value } = this.form;
    const { id, nome } = value;

    if (!id) {
      delete value.id;
    }

    value.lancamento = value.lancamento.split('T')[0];

    this.loading = true;

    this.gamesApiService
      .save(value)
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
        ({ error }) => {
          const erro = error?.erro ?? '';
          const mensagem = `Erro ao salvar o game ${nome} ${erro ? ': '+erro:''}`;
          this.messageService.error(mensagem, () => this.salvar());
        }
      );
  }
}
