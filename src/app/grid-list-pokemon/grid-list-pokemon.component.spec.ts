import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListPokemonComponent } from './grid-list-pokemon.component';

describe('GridListPokemonComponent', () => {
  let component: GridListPokemonComponent;
  let fixture: ComponentFixture<GridListPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
