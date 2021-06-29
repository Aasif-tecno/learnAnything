import { Injectable } from '@angular/core';
import { Modules } from '../shared/modules.model';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
    new Course(
      'Python',
      "Learn Python, one of today's most in-demand programming languages on-the-go! Practice writing Python code, collect points, & show off your skills now!",
      'https://img.icons8.com/color/48/000000/python.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'Java',
      'With our interactive Java course, you’ll learn object-oriented Java programming and have the ability to write clear and valid code in almost no time at all.',
      'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'JavaScript',
      'Learn all the basic features of JavaScript, including making your website more interactive, changing website content, validating forms, and so much more.',
      'https://img.icons8.com/color/48/000000/javascript.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'Ruby',
      'Learn Ruby, one of the most beautiful, artful and yet handy programming languages. Practice writing Ruby code, collect points, & show off your skills now!',
      'https://img.icons8.com/color/48/000000/ruby-programming-language.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'HTML',
      'This FREE course will teach you how to design a web page using HTML. Complete a series of hands-on exercises and practice while writing real HTML code.',
      'https://img.icons8.com/color/48/000000/html-5--v1.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'CSS',
      'Our CSS course will teach you how to control the style & layout of websites. Complete a series of exercises and practice while filling out actual CSS templates.',
      'https://img.icons8.com/color/48/000000/css3.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'React',
      'A super-tasty Schintzel - just awsome',
      'https://img.icons8.com/color/48/000000/react-native.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'Angular',
      'A super-tasty Schintzel - just awsome',
      'https://img.icons8.com/color/48/000000/angularjs.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'C#',
      'With our interactive C# Tutorial, you will learn C# programming on-the-go! Practice writing C# code, collect points, & show off your skills.',
      'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'Kotlin',
      'Kotlin is a modern and powerful cross-platform programming language, designed to interoperate with Java. In this course, we’ll cover the main concepts of Kotlin, as well as build real-life projects and solve different coding challenges.',
      'https://img.icons8.com/color/48/000000/kotlin.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'Swift 4',
      'Learn all the main concepts of Swift programming and apply your newly gained knowledge to create your own, fully functioning iOS app!',
      'https://img.icons8.com/color/48/000000/swift.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'PHP',
      'PHP enables you to create dynamic web pages, develop websites, and generate dynamic content. Learn the most widely used web programming language!',
      'https://img.icons8.com/officel/40/000000/php-logo.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
    new Course(
      'Data Science',
      'Data Science is a must know discipline in the era of big data. Today, companies and industries must make data-driven decisions to survive. Learn how Data Science works.',
      'https://img.icons8.com/color/48/000000/combo-chart--v2.png',
      [
        new Modules(
          'Basic Concept',
          7,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1220.png'
        ),
        new Modules(
          'String & Variables',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Control Stucuture',
          13,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1524.png'
        ),
        new Modules(
          'Function & Modules',
          10,
          'https://sololearnuploads.azureedge.net/uploads/modules/1073/1222.png'
        ),
      ]
    ),
  ];

  constructor() {}

  getCourses() {
    return this.courses.slice();
  }

  getCourse(index: number) {
    return this.courses[index];
  }
}
