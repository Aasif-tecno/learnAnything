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
    // new Course(
    //   'Python',
    //   'A super-tasty Schintzel - just awsome',
    //   'https://img.icons8.com/color/48/000000/python.png'
    // ),
    // new Course(
    //   'Java',
    //   'A super-tasty Schintzel - just awsome',
    //   'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png'
    // ),
    // new Course(
    //   'JavaScript',
    //   'A super-tasty Schintzel - just awsome',
    //   'https://img.icons8.com/color/48/000000/javascript.png'
    // ),
    // new Course(
    //   'Ruby',
    //   'A super-tasty Schintzel - just awsome',
    //   'https://img.icons8.com/color/48/000000/ruby-programming-language.png'
    // ),
    // new Course(
    //   'HTML',
    //   'A super-tasty Schintzel - just awsome',
    //   'https://img.icons8.com/color/48/000000/html-5--v1.png'
    // ),
    // new Course(
    //   'CSS',
    //   'A super-tasty Schintzel - just awsome',
    //   'https://img.icons8.com/color/48/000000/css3.png'
    // ),
    // new Course(
    //   'React',
    //   'A super-tasty Schintzel - just awsome',
    //   'https://img.icons8.com/color/48/000000/react-native.png'
    // ),
    // new Course(
    //   'Angular',
    //   'A super-tasty Schintzel - just awsome',
    //   'https://img.icons8.com/color/48/000000/angularjs.png'
    // ),
  ];

  constructor() {}

  getCourses() {
    return this.courses.slice();
  }

  getCourse(index: number) {
    return this.courses[index];
  }
}
