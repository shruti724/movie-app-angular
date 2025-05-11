import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbCardModule, NbInputModule, NbButtonModule, NbActionsModule, NbSidebarModule } from '@nebular/theme';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { BookmarkedMoviesComponent } from './bookmarked-movies/bookmarked-movies.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../app/movie-search/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    BookmarkedMoviesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule,  
    NbInputModule,
    HttpClientModule,
     NbActionsModule, 
     NbSidebarModule.forRoot(),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
