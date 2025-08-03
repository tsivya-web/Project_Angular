import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'details/:id',
    renderMode: RenderMode.Client, // הנתיב הדינמי ברינדור בצד לקוח (client)
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender, // כל השאר בפרה-רנדר
  }
];
