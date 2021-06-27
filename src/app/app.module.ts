import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { CourseService } from './courses/course.service';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseModuleComponent } from './courses/course-detail/course-module/course-module.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    HomeComponent,
    CourseItemComponent,
    CourseDetailComponent,
    CourseModuleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
