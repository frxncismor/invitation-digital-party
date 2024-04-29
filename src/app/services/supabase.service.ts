import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../environment/environment.prod';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseApiKey);
  }

  getGuest(userId: string, guestId: string) {
    return from(
      this.supabase
        .from('guests')
        .select('*')
        .eq('user_id', userId)
        .eq('id', guestId)
    );
  }

  updateGuest(userId: string, guestId: string, will_assist: boolean) {
    return from(
      this.supabase
        .from('guests')
        .update(([
          { will_assist }
        ]))
        .eq('user_id', userId)
        .eq('id', guestId)
        .select()
    );
  }
}
