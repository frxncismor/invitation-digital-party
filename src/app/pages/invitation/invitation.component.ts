import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { Invitation, xvThemes, LayoutComponent, HeroComponent, InvitationComponent as CupcakeInvitationComponent} from '@digital-party/cupcake';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [LayoutComponent, HeroComponent, CupcakeInvitationComponent],
  templateUrl: './invitation.component.html',
  styleUrl: './invitation.component.scss'
})
export class InvitationComponent implements OnInit {
  userId: string | null = '';
  guestId: string | null = '';

  invitation: Invitation = {
    theme: xvThemes.XV1,
    celebrated: {
      name: 'Dana',
      eventDate: DateTime.fromISO("2024-05-31"),
      heroBgImg: 'https://images.pexels.com/photos/19726278/pexels-photo-19726278/free-photo-of-mujer-modelo-maqueta-ramo-de-flores.jpeg',
      invitationBgImg: 'https://adagbrjzndukouwqcknu.supabase.co/storage/v1/object/public/design_images/xv2/pexels-evie-shaffer-2395249.jpg'
    },
    guest: {
      tickets: 0,
      message: '',
      full_name: '',
      will_assist: null
    },
    event: {
      location: {
        url: 'https://maps.app.goo.gl/shYHz6kActShMXd58',
        placeName : '"El portón de Santa Fé"',
        address: {
          street: 'Avenida Santa Fé 147.',
          indications: 'Entre la Universidad Santa Fe y la caseta de cobro Cervera.',
          city: 'Guanajuato, Guanajuato.'
        }
      }
    }
  }

  constructor(
    private route: ActivatedRoute,
    private supabase: SupabaseService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.guestId = this.route.snapshot.paramMap.get('guestId');
    this.getGuest();
  }

  getGuest() {
    if (this.userId && this.guestId) {
      this.supabase.getGuest(this.userId, this.guestId).subscribe(res => {
        console.log('res:', res)
        if (res.data) {
          this.invitation.guest.tickets = res.data[0].tickets;
          this.invitation.guest.message = res.data[0].message;
          this.invitation.guest.full_name = res.data[0].full_name;
        }
      });
    }
  }

  updateGuest() {
    if (this.userId && this.guestId) {
      this.supabase.updateGuest(this.userId, this.guestId, true).subscribe(res => {
        console.log('res', res);
      });
    }
  }
}
