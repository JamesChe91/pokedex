import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPokemonComponent } from './dialog-pokemon.component';

describe('DialogPokemonComponent', () => {
  let component: DialogPokemonComponent;
  let fixture: ComponentFixture<DialogPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
