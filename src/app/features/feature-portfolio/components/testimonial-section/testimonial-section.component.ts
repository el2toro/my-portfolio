import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss'],
})
export class TestimonialSectionComponent implements OnInit {
  testimonials = [
    {
      name: 'Daniela Manson',
      position: 'Founder at CM Corp',
      description: '"It has been a game-changer for my workflow. The intuitive interface and clear features made it easy to learn, even for someone not super tech-savvy. I\'ve become much more efficient, and the time saved allows me to focus on more strategic tasks. Highly recommend!"',
      image: 'assets/images/testimonial-2.jpg',
    },
    {
      name: 'Piera Mandelli',
      position: 'Marketing Manager at GreenTech Solutions',
      description: '"I never thought I could create professional-looking designs!  With a vast library of templates and tools that make graphic design accessible and intuitive.  My social media posts and marketing materials have a whole new level of polish now."',
      image: 'assets/images/testimonial-3.jpg',
    },
    {
      name: 'Olivia Jones',
      position: 'CFO at Harmony Daycare Centers',
      description: '"Say goodbye to late nights spent crunching numbers!  VB automates so much of our accounting process, saving us a ton of time and frustration.  The data visualizations are clear and insightful, making financial tracking a breeze."',
      image: 'assets/images/testimonial-4.jpg',
    },
    {
      name: 'Michael Rodrigue',
      position: 'Head of Customer Success at TechSupportWiz',
      description: '"Providing excellent customer service just got easier!  VB helps us streamline our support tickets and communication with clients.  We can now resolve issues faster and keep our customers happy."',
      image: 'assets/images/testimonial-5.jpg',
    },
    {
      name: 'David Chen',
      position: "Founder of Chen's Culinary Creations",
      description: '"Streamlilining our workflow with VB has been a game-changer.  Our team collaboration is so much smoother now, and deadlines are met with less stress.  The easy-to-use interface makes project management a breeze!"',
      image: 'assets/images/testimonial-6.jpg',
    },
  ];

  constructor() {}

  currentSlide = 0;

  progress = [20, 40, 60, 80, 100]

  ngOnInit() {}

  goToPrevious(count: number) {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.testimonials.length - 1 : previous;
  }

  goToNext(count: number) {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.testimonials.length ? 0 : next;
  }
}
