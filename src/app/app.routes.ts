import { Routes } from '@angular/router';
import { InvitationComponent } from './pages/invitation/invitation.component';

export const routes: Routes = [
  { path: ':userId/:guestId', component: InvitationComponent }
];
