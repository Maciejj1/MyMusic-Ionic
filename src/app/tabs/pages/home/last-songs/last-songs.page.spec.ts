import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastSongsPage } from './last-songs.page';

describe('LastSongsPage', () => {
  let component: LastSongsPage;
  let fixture: ComponentFixture<LastSongsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LastSongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
