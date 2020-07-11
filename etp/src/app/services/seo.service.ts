import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  generateTags({
    title = '',
    description = '',
    image = '/assets/img/laptop-and-iphone.png',
  }) {
    this.title.setTitle(title);
    this.meta.addTags([
      // Open Graph
      { name: 'title', content: title },
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: `http://etp.solarbankers.org${this.router.url}`,
      },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:title', content: title },
      {
        name: 'twitter:url',
        content: `http://etp.solarbankers.org${this.router.url}`,
      },
    ]);
  }
}
